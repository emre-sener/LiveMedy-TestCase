using System;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.DTO;
using LiveMedy.Models;
using LiveMedy.Models.Servisler.Log;
using LiveMedy.Models.Servisler;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.Servisler
{
    public class IslemlerServisi
    {
        public static bool YoneticiIslemiEkle(int dilId, int yoneticiId, int aksiyonId, string islem, string aciklama)
        {
            try
            {
                LiveMedyContext db = new LiveMedyContext();
                string ip = YardimciServisi.IpGetir();

                LiveMedyYntYoneticiIslemleri yonIslem = new LiveMedyYntYoneticiIslemleri();
                yonIslem.DilId = dilId;
                yonIslem.YoneticiId = yoneticiId;
                yonIslem.AksiyonId = aksiyonId;
                yonIslem.IslemKodu = islem;
                yonIslem.Aciklama = aciklama;
                yonIslem.Tarih = DateTime.Now;
                yonIslem.Ip = ip;

                db.LiveMedyYntYoneticiIslemleri.Add(yonIslem);
                db.SaveChanges();
                return true;
            }
            catch (Exception hata)
            {
                var aktifKullanici = AktifKullanici.KullaniciBilgileri;
                LogServisi.LogEkle(aktifKullanici.Adi, "Error", "Admin", "Yönetici İşlemi Ekleme Hatası", hata);
                return false;
            }
        }
    }
}
