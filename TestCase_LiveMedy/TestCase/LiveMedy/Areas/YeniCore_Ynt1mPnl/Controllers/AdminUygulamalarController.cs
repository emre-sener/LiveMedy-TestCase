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

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Controllers
{
    [Area("YeniCore_Ynt1mPnl")]
    public class AdminUygulamalarController : AdminPanelController
    {
        public IActionResult Index()
        {

            List<LiveMedyYntUygulamalar> uygulamalar = db.LiveMedyYntUygulamalar.OrderBy(s => s.Sira).ToList();
            LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Görüntüleme", "Uygulama Görüntüleme", "Başarılı", false, "");
            return View(uygulamalar);
        }

        public IActionResult Ekle()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Ekle(LiveMedyYntUygulamalar uygulama)
        {
            try
            {
                uygulama.EklenmeTarihi = DateTime.Now;
                uygulama.IpAdres = YonetimPanelYardimciServisi.IpGetir();
                uygulama.KullaniciId = AktifKullanici.KullaniciBilgileri.YoneticiId;

                db.LiveMedyYntUygulamalar.Add(uygulama);
                db.SaveChanges();
                ViewBag.IslemDurum = true;
                LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Ekleme", "Uygulama Ekleme", "Başarılı", false, "");
                return RedirectToAction("Index");
            }
            catch (Exception ex)
            {
                ViewBag.IslemDurum = false;
                LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Ekleme", "Uygulama Ekleme", "Başarısız", true, ex.InnerException.Message);
                LogServisi.LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Error", "Admin", "Admin Uygulama Ekleme Hatası", ex);
            }
            return View(uygulama);
        }

        public IActionResult Duzenle(int id)
        {
            LiveMedyYntUygulamalar uygulama = db.LiveMedyYntUygulamalar.FirstOrDefault(s => s.UygulamaId == id);
            if (uygulama == null)
            {
                return NotFound();
            }
            return View(uygulama);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Duzenle(LiveMedyYntUygulamalar uygulama)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    uygulama.GuncellenmeTarihi = DateTime.Now;
                    uygulama.IpAdres = YonetimPanelYardimciServisi.IpGetir();
                    uygulama.KullaniciId = AktifKullanici.KullaniciBilgileri.YoneticiId;

                    db.Entry(uygulama).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    db.SaveChanges();
                    ViewBag.IslemDurum = true;
                    LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Düzenleme", "Uygulama Düzenleme", "Başarılı", false, "");
                    return RedirectToAction("Index");
                }
            }
            catch (Exception ex)
            {
                ViewBag.IslemDurum = false;
                LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Ekleme", "Uygulama Düzenleme", "Başarısız", true, ex.InnerException.Message);
                LogServisi.LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Error", "Admin", "AdminUygulama Güncelleme Hatası", ex);
            }
            return View(uygulama);
        }

        [HttpPost]
        public JsonResult SiraDuzenle(int id, int sira)
        {
            LiveMedyYntUygulamalar uygulama = db.LiveMedyYntUygulamalar.FirstOrDefault(h => h.UygulamaId == id);
            try
            {
                if (uygulama != null)
                {
                    uygulama.Sira = sira;
                    db.SaveChanges();
                    ViewBag.IslemDurum = true;
                    LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Sıra Düzenle", "Uygulama Sıra Düzenleme", "Başarılı", false, "");
                }
            }
            catch (Exception ex)
            {
                ViewBag.IslemDurum = false;
                LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Ekleme", "Uygulama Sıra Düzenleme", "Başarısız", true, ex.InnerException.Message);
                LogServisi.LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Error", "Admin", "AdminUygulama Sıra Düzenleme Hatası", ex);
            }
            return Json(uygulama.Sira);
        }


        [HttpGet]
        public JsonResult AktivasyonIslemleri(int id)
        {
            LiveMedyYntUygulamalar uygulama = db.LiveMedyYntUygulamalar.FirstOrDefault(h => h.UygulamaId == id);
            try
            {
                if (uygulama != null)
                {
                    uygulama.AktifMi = !uygulama.AktifMi;
                    db.SaveChanges();
                    ViewBag.IslemDurum = true;
                    LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Aktivasyon İşlemi", "Uygulama Aktivasyon İşlemi", "Başarılı", false, "");
                }
            }
            catch (Exception ex)
            {
                ViewBag.IslemDurum = false;
                LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Aktivasyon İşlemi", "Uygulama Aktivasyon İşlemi", "Başarısız", true, ex.InnerException.Message);
                LogServisi.LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Error", "Admin", "AdminUygulama Aktivasyon İşlemi Hatası", ex);
            }
            return Json(uygulama.AktifMi);
        }

        [HttpPost]
        public JsonResult Sil(int id)
        {
            LiveMedyYntUygulamalar uygulama = db.LiveMedyYntUygulamalar.FirstOrDefault(s => s.UygulamaId == id);
            try
            {
                if (uygulama != null)
                {
                    db.LiveMedyYntUygulamalar.Remove(uygulama);
                    db.SaveChanges();
                    ViewBag.IslemDurum = true;
                    LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Silme İşlemi", "Uygulama Silme İşlemi", "Başarılı", false, "");
                }
            }
            catch (Exception ex)
            {
                ViewBag.IslemDurum = false;
                LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Silme İşlemi", "Uygulama Silme İşlemi", "Başarısız", true, ex.InnerException.Message);
                LogServisi.LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Error", "Admin", "AdminUygulama Silme İşlemi Hatası", ex);
            }
            return Json("");
        }

    }
}
