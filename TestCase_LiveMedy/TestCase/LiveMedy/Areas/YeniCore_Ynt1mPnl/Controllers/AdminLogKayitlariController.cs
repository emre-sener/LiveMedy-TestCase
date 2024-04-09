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
    public class AdminLogKayitlariController : AdminPanelController
    {
        public IActionResult Index()
        {
            List<LiveMedyLogLogKayitlari> logKayitlari = db.LiveMedyLogLogKayitlari.OrderBy(s => s.LogKayitId).ToList();
            LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Görüntüleme", "Log Kayıtları", "Başarılı", false, "");
            return View(logKayitlari);
        }
    }
}
