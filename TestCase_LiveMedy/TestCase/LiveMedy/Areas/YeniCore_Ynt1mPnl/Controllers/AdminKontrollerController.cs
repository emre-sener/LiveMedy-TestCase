using DocumentFormat.OpenXml.Wordprocessing;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.DTO;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.Servisler;
using LiveMedy.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System;
using System.Collections.Generic;
using LiveMedy.Models.Servisler.Log;
using LiveMedy.Models.Servisler;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Controllers
{
    [Area("YeniCore_Ynt1mPnl")]
    public class AdminKontrollerController : AdminPanelController
    {
        public IActionResult Index()
        {
            List<LiveMedyYntUygulamalar> uygulamalar = db.LiveMedyYntUygulamalar.OrderBy(s => s.Sira).ToList();
            LogEkle(AktifKullanici.KullaniciBilgileriniAl().KullaniciAdi, "Görüntüleme", "Uygulama Kontrol Görüntüleme", "Başarılı", false, "");
            return View(uygulamalar);
        }

        [HttpGet]
        public async Task<JsonResult> UygulamaKontrol(int id)
        {
            string sonuc = "";
            LiveMedyYntUygulamalar uygulama = db.LiveMedyYntUygulamalar.FirstOrDefault(h => h.UygulamaId == id);
            try
            {
                if (uygulama != null)
                {
                    //kontrol et

                    string url = uygulama.UygulamaUrl;

                    var client = new HttpClient();
                    var request = new HttpRequestMessage
                    {
                        Method = HttpMethod.Get,
                        RequestUri = new Uri(url)
                    };

                    using (var response = await client.SendAsync(request))
                    {
                        sonuc = response.StatusCode.ToString();

                        LiveMedyYntUygulamaKontrol uygulamaKontrol = new LiveMedyYntUygulamaKontrol();
                        uygulamaKontrol.UygulamaId = uygulama.UygulamaId;
                        uygulamaKontrol.StatusCode = response.StatusCode.ToString();
                        uygulamaKontrol.Aciklama = response.ReasonPhrase.ToString();
                        uygulamaKontrol.Tarih = DateTime.Now;
                        uygulamaKontrol.IpAdres = YonetimPanelYardimciServisi.IpGetir();
                        uygulamaKontrol.KullaniciId = AktifKullanici.KullaniciBilgileriniAl().YoneticiId;

                        db.LiveMedyYntUygulamaKontrol.Add(uygulamaKontrol);
                        db.SaveChanges();

                        if (response.IsSuccessStatusCode != true)
                        {
                            //mail gönder
                            MailServisi.MailYolla("GonderenMailAdresi", "GosterilenAd", "GonderilecekAdres", "Hata Mesajı", sonuc, "Sunucu", "User", "Pwd"); //Aktif bir mail hesabı ile yapılandırılmadı. Fonksiyon pasifte. Herhangi bir eposta hesabına ait credential bilgileri sağlandıktan sonra fonksiyon aktife alınabilir.
                        }

                       
                    }

                    //kontrol et

                    ViewBag.IslemDurum = true;
                    LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Uygulama Kontrol", "Uygulama Kontrol İşlemi", "Başarılı", false, "");
                }
            }
            catch (Exception ex)
            {
                ViewBag.IslemDurum = false;
                LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Uygulama Kontrol", "Uygulama Kontrol İşlemi", "Başarısız", true, ex.InnerException.Message + ": Geçesiz Url");
                sonuc = ex.InnerException.Message + ": Geçesiz Url";
                LogServisi.LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Error", "Admin", "AdminKontroller Uygulama Kontrol İşlemi Hatası", ex);
            }
            return Json(sonuc);
        }
    }
}
