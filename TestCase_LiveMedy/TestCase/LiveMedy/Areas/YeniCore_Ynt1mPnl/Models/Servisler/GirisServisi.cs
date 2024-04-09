using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.DTO;
using LiveMedy.Models;
using LiveMedy.Models.Servisler.Log;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.Servisler
{
    public class GirisServisi
    {
        static string HashAl(string input)
        {
            using (SHA1Managed sha1 = new SHA1Managed())
            {
                var hash = sha1.ComputeHash(Encoding.UTF8.GetBytes(input));
                var sb = new StringBuilder(hash.Length * 2);

                foreach (byte b in hash)
                {
                    // can be "x2" if you want lowercase
                    sb.Append(b.ToString("X2"));
                }

                return sb.ToString();
            }
        }
        public static bool GirisYap(string kullaniciAdi, string sifre)
        {
            using (var db = new LiveMedyContext())
            {
                LiveMedyYntYoneticiler aktifYonetici = new LiveMedyYntYoneticiler();
                try
                {
                    kullaniciAdi = kullaniciAdi.Replace("'", "x").Replace("\"", "x").Replace("<", "x").Trim();
                    sifre = sifre.Replace("'", "x").Replace("\"", "x").Replace("<", "x").Trim();
                    sifre = HashAl(sifre);

                    aktifYonetici = db.LiveMedyYntYoneticiler.FirstOrDefault(y => y.KullaniciAdi == kullaniciAdi && y.Sifre == sifre && y.AktifMi == true && y.IptalMi != true);
                    if (aktifYonetici != null)
                    {
                        aktifYonetici.SonGirisTarihi = DateTime.Now;
                        db.SaveChanges();
                        //LogServisi.SqlLogEkle(aktifYonetici.KullaniciAdi, "Info", "Login", "", null);
                        
                        //FormsAuthentication.SetAuthCookie(aktifYonetici.KullaniciAdi + ";" + aktifYonetici.Sifre, true);
                        return true;
                    }
                    return false;
                }
                catch (Exception ex)
                {
                    LogServisi.LogEkle("", "Error", "Login", "Admin Kullanıcı Girişi Hatası", ex);
                    return false;
                }
            }
        }
        public static bool KullaniciYetkiKontrol(string kontrol, string aksiyon)
        {
            var aktifKullanici = AktifKullanici.KullaniciBilgileri;
            var kullaniciHaklari = new List<LiveMedyYntHaklar>();
            bool sonuc = false;
            if (aktifKullanici != null)
            {
                if (aktifKullanici.Rol.LiveMedyYntHaklar != null)
                    kullaniciHaklari = aktifKullanici.Rol.LiveMedyYntHaklar.ToList();
                foreach (LiveMedyYntHaklar hak in kullaniciHaklari)
                {
                    if (hak.Aksiyon.KontrolAdi == kontrol && hak.Aksiyon.Adi == aksiyon)
                        sonuc = true;
                }
            }
            return sonuc;
        }
        protected IHttpContextAccessor _accessor;
        public GirisServisi(IHttpContextAccessor accessor)
        {
            _accessor = accessor;
        }
        public static List<LiveMedyYntAksiyonlar> KullaniciAksiyonListesiniGetir()
        {
            List<LiveMedyYntAksiyonlar> kullaniciAksiyonListesi = new List<LiveMedyYntAksiyonlar>();
            using (var db = new LiveMedyContext())
            {
                var aktifKullanici = AktifKullanici.KullaniciBilgileri;
                var kullaniciHaklari = new List<LiveMedyYntHaklar>();
              

                if (aktifKullanici != null)
                {
                    if (aktifKullanici.Rol.LiveMedyYntHaklar != null)
                        kullaniciHaklari = aktifKullanici.Rol.LiveMedyYntHaklar.ToList();
              

                    foreach (LiveMedyYntHaklar hak in kullaniciHaklari)
                    {
                        int aksiyonvarmi = db.LiveMedyYntAksiyonlar.Where(z => z.AksiyonId == hak.AksiyonId && z.AktifMi == true).Count();
                        if (aksiyonvarmi > 0)
                        { 
                            kullaniciAksiyonListesi.Add(hak.Aksiyon);
                        }
                        else
                        {
                            kullaniciAksiyonListesi.Remove(hak.Aksiyon);
                        }
                    }
                }
            }
            return kullaniciAksiyonListesi;
            
        }

        public static int AksiyonBilgiGetir(string kontrol, string aksiyon)
        {
            using (var db = new LiveMedyContext())
            {
                LiveMedyYntAksiyonlar aks = db.LiveMedyYntAksiyonlar.FirstOrDefault(a => a.Adi == aksiyon && a.KontrolAdi == kontrol && a.AktifMi == true);
                if (aks != null)
                {
                    return aks.AksiyonId;
                }
            }
            return -1;
        }

        public static string YetkiMesaji()
        {
            return "Bu sayfaya erişmek için gerekli yetkiye sahip değilsiniz lütfen sistem yöneticinizle irtibata geçin.";
        }

        public static int IpGirisIzinDurumu(string ipAdresi)
        {
            //1:giris
            //2:giris yok
            //3:smsli giris
            //Web.Config dosyasında bulunan IzinliIPler değişkeni sadece ip kısıtlaması true olduğunda kontrol edilir.
            //Sms ile şifre gönderimi sadece dış network kullanıcıları içindir.

            bool ipKisitlamasi = false;// Convert.ToBoolean(WebConfigurationManager.AppSettings["IpKisitlamasiVarMi"]);
            bool smsKontrol = false; // Convert.ToBoolean(WebConfigurationManager.AppSettings["SmsKontrol"]);

            if (ipKisitlamasi)
            {
                if (smsKontrol)
                {
                    //iç network
                    if (GirisServisi.IpGirisIzniVarMi(ipAdresi))
                    {
                        return 1;
                    }
                    else // dış network
                    {
                        return 3;
                    }
                }
                else
                {
                    //iç network
                    if (GirisServisi.IpGirisIzniVarMi(ipAdresi))
                    {
                        return 1;
                    }
                    else // dış network
                    {
                        return 2;
                    }
                }
            }
            else
            {
                return 1;
            }
        }

        public static bool IpGirisIzniVarMi(string ipAdresi)
        {
            string[] ipBolumleri = ipAdresi.Trim().Split(new char[] { '.' });
            string adresler = "";// Convert.ToString(ConfigurationManager.AppSettings["IzinliIPler"]);
            string[] gecerliIpAdresleri = adresler.Trim().Split(new char[] { ',' });
            foreach (var gecerliIpAdresi in gecerliIpAdresleri)
            {
                if (gecerliIpAdresi.Trim() == ipAdresi)
                {
                    return true;
                }
                string[] gecerliBolumler = gecerliIpAdresi.Trim().Split(new char[] { '.' });
                bool uygunMu = true;
                for (int i = 0; i < gecerliBolumler.Length; i++)
                {
                    if (gecerliBolumler[i] != "*")
                    {
                        if (gecerliBolumler[i] != ipBolumleri[i])
                        {
                            uygunMu = false;
                            break;
                        }
                    }
                }

                if (uygunMu)
                {
                    return true;
                }
            }
            return false;
        }

    }
    //public class MRequireHttpsAttribute : RequireHttpsAttribute
    //{
    //    public override void OnAuthorization(AuthorizationContext filterContext)
    //    {
    //        if (filterContext == null)
    //        {
    //            throw new ArgumentNullException("filterContext");
    //        }

    //        if (filterContext.HttpContext != null && filterContext.HttpContext.Request.IsLocal)
    //        {
    //            return;
    //        }

    //        base.OnAuthorization(filterContext);
    //    }
    //}
}
