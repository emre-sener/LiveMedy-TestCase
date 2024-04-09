using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.DTO;
using LiveMedy.Models;
using LiveMedy.Models.Servisler.Log;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.Servisler;
using LiveMedy.Models.Servisler;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Controllers
{


    [Area("YeniCore_Ynt1mPnl")]
    public class AdminYoneticilerController : AdminPanelController
    {
        int dilId = -1;
        public IActionResult Index(string aranacak)
        {
            List<LiveMedyYntRoller> roller = db.LiveMedyYntRoller.ToList();
            ViewBag.Roller = roller;

            List<LiveMedyYntYoneticiler> yoneticiler = db.LiveMedyYntYoneticiler.OrderBy(y => y.RolId).ToList();
            if (!String.IsNullOrEmpty(aranacak))
            {
                yoneticiler = yoneticiler.Where(y => y.RolId == Convert.ToInt32(aranacak)).ToList();
            }
            return View(yoneticiler);
        }

        [HttpGet]
        public JsonResult AktivasyonIslemleri(int id)
        {
            dilId = ViewBag.AktifDilId;
            LiveMedyYntYoneticiler yonetici = db.LiveMedyYntYoneticiler.FirstOrDefault(y => y.YoneticiId == id);
            if (yonetici != null)
            {
                string aciklama = "Id:" + yonetici.YoneticiId;
                string aktifPasif = "Aktif";
                if (yonetici.AktifMi == null || yonetici.AktifMi == true)
                {
                    aktifPasif = "Pasif";
                }

                if (IslemlerServisi.YoneticiIslemiEkle(dilId, AktifKullanici.KullaniciBilgileri.YoneticiId, ViewBag.AksiyonId, aktifPasif, aciklama))
                {
                    yonetici.AktifMi = !yonetici.AktifMi;
                    yonetici.GuncellemeTarihi = DateTime.Now;
                    db.SaveChanges();
                }
            }

            return Json(yonetici.AktifMi);
        }

        public IActionResult Duzenle(int id)
        {
            List<LiveMedyYntRoller> roller = db.LiveMedyYntRoller.Where(r => r.SabitMi == false).ToList();
            ViewBag.Roller = roller;

            LiveMedyYntYoneticiler yonetici = db.LiveMedyYntYoneticiler.FirstOrDefault(y => y.YoneticiId == id);
            if (yonetici == null)
            {
                return NotFound();
            }
            return View(yonetici);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Duzenle(LiveMedyYntYoneticiler yonetici)
        {
            try
            {
                dilId = ViewBag.AktifDilId;
                if (ModelState.IsValid)
                {
                    string aciklama = "Id:" + yonetici.YoneticiId + "|AktifMi:" + yonetici.AktifMi + "|İptalMi:" + yonetici.IptalMi + "|KullanıcıAdı:" + yonetici.KullaniciAdi;
                    if (IslemlerServisi.YoneticiIslemiEkle(dilId, AktifKullanici.KullaniciBilgileri.YoneticiId, ViewBag.AksiyonId, "Guncelle", aciklama))
                    {
                        LiveMedyYntYoneticiler yonetimKullanici = db.LiveMedyYntYoneticiler.FirstOrDefault(k => k.YoneticiId == yonetici.YoneticiId);
                        if (yonetimKullanici != null)
                        {
                            yonetimKullanici.GuncellemeTarihi = DateTime.Now;

                            yonetimKullanici.RolId = yonetici.RolId;
                            yonetimKullanici.Eposta = yonetici.Eposta;
                            yonetimKullanici.TelefonNo = yonetici.TelefonNo;

                            yonetimKullanici.IptalMi = yonetici.IptalMi;
                            yonetimKullanici.IptalNedeni = yonetici.IptalNedeni;
                            if ((bool)yonetici.IptalMi)
                            {
                                yonetimKullanici.AktifMi = false;
                            }
                            else
                            {
                                yonetimKullanici.AktifMi = yonetici.AktifMi;
                            }
                            db.Entry(yonetimKullanici).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                            db.SaveChanges();
                        }

                        ViewBag.IslemDurum = true;
                        return RedirectToAction("Index");
                    }
                }
            }
            catch (Exception ex)
            {
                ViewBag.IslemDurum = false;
                LogServisi.LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Error", "Admin", "Admin Yönetici Güncelleme Hatası", ex);
            }
            return View(yonetici);
        }

        public IActionResult Ekle()
        {
            List<LiveMedyYntRoller> roller = db.LiveMedyYntRoller.Where(r => r.SabitMi == false).ToList();
            ViewBag.Roller = roller;
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Ekle(LiveMedyYntYoneticiler yonetici)
        {
            try
            {
                dilId = ViewBag.AktifDilId;
                ViewBag.IslemDurum = false;

                string kullaniciAdi = yonetici.KullaniciAdi.Replace("'", "x").Replace("\"", "x").Replace("<", "x").Trim();
                LiveMedyYntYoneticiler kullanici = db.LiveMedyYntYoneticiler.FirstOrDefault(k => k.KullaniciAdi == kullaniciAdi);
                if (kullanici == null)
                {
                    string sifre = yonetici.Sifre.Replace("'", "x").Replace("\"", "x").Replace("<", "x").Trim();
                    sifre = YonetimPanelYardimciServisi.HashAl(sifre);

                    yonetici.KullaniciAdi = kullaniciAdi;
                    yonetici.Sifre = sifre;
                    yonetici.IptalMi = false;
                    yonetici.EklemeTarihi = DateTime.Now;
                    db.LiveMedyYntYoneticiler.Add(yonetici);
                    db.SaveChanges();

                    ViewBag.IslemDurum = true;
                    string aciklama = "Id:" + yonetici.YoneticiId + "|AktifMi:" + yonetici.AktifMi + "|KullanıcıAdı:" + yonetici.KullaniciAdi;
                    IslemlerServisi.YoneticiIslemiEkle(dilId, AktifKullanici.KullaniciBilgileri.YoneticiId, ViewBag.AksiyonId, "Ekle", aciklama);
                }
            }
            catch (Exception ex)
            {
                LogServisi.LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Error", "Admin", "Admin Yönetici Ekleme Hatası", ex);
            }
            return RedirectToAction("Index", "AdminYoneticiler");
        }

        [HttpPost]
        public JsonResult KullaniciAdiKontrolEt(string kullaniciAdi)
        {
            kullaniciAdi = kullaniciAdi.Replace("'", "x").Replace("\"", "x").Replace("<", "x").Trim();
            LiveMedyYntYoneticiler yonetici = db.LiveMedyYntYoneticiler.FirstOrDefault(k => k.KullaniciAdi == kullaniciAdi);
            if (yonetici == null)
            {
                return Json(false);
            }
            else
            {
                return Json(true);
            }
        }
    }
}