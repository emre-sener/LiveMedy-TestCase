using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.DTO;
using LiveMedy.Models;
using LiveMedy.Models.Servisler.Log;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Controllers
{
  
    [Area("YeniCore_Ynt1mPnl")]
    public class AdminKullanicilarController : AdminPanelController
    {
        public IActionResult Index()
        {
            return View();
        }

        public ActionResult SifreDegistir()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        //[ValidateInput(false)]
        [AllowAnonymous]
        public ActionResult SifreDegistir(string sfr, string yeniSfr)
        {
            bool sonuc = false;
            if (ModelState.IsValid)
            {
                string gecerliSifre = sfr.Replace("'", "x").Replace("\"", "x").Replace("<", "x").Trim();
                gecerliSifre = Models.Servisler.YonetimPanelYardimciServisi.HashAl(gecerliSifre);

                string yeniSifre = yeniSfr.Replace("'", "x").Replace("\"", "x").Replace("<", "x").Trim();
                yeniSifre = Models.Servisler.YonetimPanelYardimciServisi.HashAl(yeniSifre);

                int aktifKullaniciId = AktifKullanici.KullaniciBilgileri.YoneticiId;
                string aktifKullaniciAdi = AktifKullanici.KullaniciBilgileri.KullaniciAdi;
                LiveMedyYntYoneticiler yonetici = db.LiveMedyYntYoneticiler.FirstOrDefault(k => k.YoneticiId == aktifKullaniciId && k.Sifre == gecerliSifre && k.AktifMi == true);
                if (yonetici != null)
                {
                    yonetici.Sifre = yeniSifre;
                    db.SaveChanges();
                    //LogServisi.SqlLogEkle(aktifKullaniciAdi, "Info", "ŞifreDeğiştir", "", null);
                    sonuc = true;
                }
            }
            ViewBag.SfrSonuc = sonuc;
            return View();
        }
    }
}