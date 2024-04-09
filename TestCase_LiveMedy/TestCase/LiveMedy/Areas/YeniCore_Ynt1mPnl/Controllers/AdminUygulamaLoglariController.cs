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
using Microsoft.EntityFrameworkCore;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Controllers
{
    [Area("YeniCore_Ynt1mPnl")]
    public class AdminUygulamaLoglariController : AdminPanelController
    {
        public IActionResult Index()
        {
            List<LiveMedyYntUygulamaKontrol> uygulamaKontrol = db.LiveMedyYntUygulamaKontrol.Include(d => d.Uygulama).Include(d=>d.Kullanici).OrderBy(s => s.KontrolSonucId).ToList();
            LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Görüntüleme", "Uygulama Logları", "Başarılı", false, "");
            return View(uygulamaKontrol);
        }
    }
}
