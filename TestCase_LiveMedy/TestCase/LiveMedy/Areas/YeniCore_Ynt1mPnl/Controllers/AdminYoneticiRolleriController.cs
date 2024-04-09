using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.DTO;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.Servisler;
using LiveMedy.Models;
using LiveMedy.Models.Servisler.Log;


namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Controllers
{
    [Area("YeniCore_Ynt1mPnl")]
    public class AdminYoneticiRolleriController : AdminPanelController
    {
        int dilId = -1;
        public ActionResult Index()
        {
            List<LiveMedyYntRoller> roller = db.LiveMedyYntRoller.ToList();
            return View(roller);
        }

        public ActionResult HakDuzenle(int id)
        {
            RolHaklari rolHaklari = new RolHaklari();
            LiveMedyYntRoller rol = db.LiveMedyYntRoller.FirstOrDefault(r => r.RolId == id);
            if (rol != null)
            {
                ViewBag.TumAksiyonlar = db.LiveMedyYntAksiyonlar.OrderBy(a => a.KontrolAdi).ToList();
                List<LiveMedyYntHaklar> haklar =  db.LiveMedyYntHaklar.Where(r => r.RolId == id).ToList();
                rolHaklari.Rol = rol;
                rolHaklari.Haklar = haklar;
            }
            else
            {
                return NotFound();
            }
            return View(rolHaklari);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult HakDuzenle(IFormCollection fc)
        {
            try
            {
                dilId = ViewBag.AktifDilId;
                if (ModelState.IsValid)
                {
                    List<LiveMedyYntAksiyonlar> tumAksiyonlar = db.LiveMedyYntAksiyonlar.OrderBy(a => a.KontrolAdi).ToList();
                    List<LiveMedyYntAksiyonlar> yeniAksiyonlar = new List<LiveMedyYntAksiyonlar>();
                    int rolId = Convert.ToInt32(fc["RolId"].ToString());

                    List<LiveMedyYntHaklar> mevcutHaklar =  db.LiveMedyYntHaklar.Where(h => h.RolId == rolId).ToList();
                    string mevcutHakAciklama = ",";
                    foreach (LiveMedyYntHaklar hak in mevcutHaklar)
                    {
                        mevcutHakAciklama += hak.AksiyonId + ",";
                    }

                    string aciklama = "Id:" + rolId + "|GuncellenenHaklar:" + mevcutHakAciklama;
                    if (IslemlerServisi.YoneticiIslemiEkle(dilId, AktifKullanici.KullaniciBilgileri.YoneticiId, ViewBag.AksiyonId, "Guncelle", aciklama))
                    {
                        foreach (var aksiyon in tumAksiyonlar)
                        {
                            if (fc["chk_" + aksiyon.AksiyonId.ToString()].Contains("true"))
                            {
                                yeniAksiyonlar.Add(aksiyon);
                            }
                        }

                         db.LiveMedyYntHaklar.RemoveRange( db.LiveMedyYntHaklar.Where(h => h.RolId == rolId));
                        db.SaveChanges();

                        foreach (var aksiyon in yeniAksiyonlar)
                        {
                            LiveMedyYntHaklar hak = new LiveMedyYntHaklar();
                            hak.RolId = rolId;
                            hak.AksiyonId = aksiyon.AksiyonId;

                             db.LiveMedyYntHaklar.Add(hak);
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
                LogServisi.LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Error", "Admin", "Admin Yönetici Rolü Güncelleme Hatası", ex);
            }
            return RedirectToAction("Index");
        }

        public ActionResult Ekle()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        //[ValidateInput(false)]
        public ActionResult Ekle(LiveMedyYntRoller rol)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    rol.SabitMi = false; //Süper admin dışında bu alan false değerindedir
                    db.LiveMedyYntRoller.Add(rol);
                    db.SaveChanges();

                    ViewBag.IslemDurum = true;
                    string aciklama = "Id:" + rol.RolId + "|Adı:" + rol.Adi;
                    IslemlerServisi.YoneticiIslemiEkle(dilId, AktifKullanici.KullaniciBilgileri.YoneticiId, ViewBag.AksiyonId, "Ekle", aciklama);
                    return RedirectToAction("Index");
                }
            }
            catch (Exception ex)
            {
                ViewBag.IslemDurum = false;
                LogServisi.LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Error", "Admin", "Admin Yönetici Rolü Ekleme Hatası", ex);
            }
            return View(rol);
        }
    }
}