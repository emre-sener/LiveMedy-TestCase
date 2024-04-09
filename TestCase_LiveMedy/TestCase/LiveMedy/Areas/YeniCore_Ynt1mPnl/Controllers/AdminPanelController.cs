using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.DTO;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.Servisler;
using LiveMedy.Models;
using LiveMedy.Models.Servisler.Log;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Controllers
{

    public class AdminPanelController : Controller
    {
        public LiveMedyContext db = new LiveMedyContext();
        public AdminPanelController()
        {
            ViewBag.Title = "LiveMedy";
            ViewBag.IslemDurum = null;
            System.Int32 timeout = 20;
            ViewBag.SureAsimi = timeout;
        }

        public string fileMapPath = "wwwroot\\";
        protected readonly IHttpContextAccessor _accessor;
        protected readonly IHostingEnvironment _hostPath;
        public static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        public AdminPanelController(IHttpContextAccessor accessor, IHostingEnvironment env)
        {
            _accessor = accessor;
            _hostPath = env;

        }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var controllerActionDescriptor = filterContext.ActionDescriptor as Microsoft.AspNetCore.Mvc.Controllers.ControllerActionDescriptor;
            var admindil = HttpContext.Session.GetInt32("AdminDilId");

            string aksiyon = controllerActionDescriptor.ActionName;
            string kontrol = controllerActionDescriptor.ControllerName;
            if (AktifKullanici.KullaniciBilgileri == null)
            {
                filterContext.Result = new RedirectResult("~/YeniCore_Ynt1mPnl/Login/Giris");

                base.OnActionExecuting(filterContext);
            }
            else if (!GirisServisi.KullaniciYetkiKontrol(kontrol, aksiyon))
            {
                filterContext.Result = RedirectToRoute("Admin_default", new RouteValueDictionary { { "action", "Yetkisiz" }, { "controller", "AdminMesaj" } });
                base.OnActionExecuting(filterContext);
                Redirect("~/YeniCore_Ynt1mPnl/AdminHata/HataSayfasi");
            }
            else if (admindil == null)
            {
                filterContext.Result = new RedirectResult("~/YeniCore_Ynt1mPnl/Login/Cikis");
                base.OnActionExecuting(filterContext);
            }
            else
            {
                //kullanıcının rolünün hak durumuna göre menu listesinin oluşturulması için eklenmiştir
                ViewBag.KullaniciAksiyonListesi = GirisServisi.KullaniciAksiyonListesiniGetir();
                ViewBag.AksiyonId = GirisServisi.AksiyonBilgiGetir(kontrol, aksiyon);
                ViewBag.AktifDilId = admindil;
                ViewBag.AktifKullaniciAdi = AktifKullanici.KullaniciBilgileri.KullaniciAdi;
                ViewBag.MenuListesi = db.LiveMedyYntMenuler.Where(m => m.AktifMi == true).OrderBy(m => m.Sira).ToList();

                MenuOlustur(filterContext);
            }
        }

        private void MenuOlustur(ActionExecutingContext filterContext)
        {
            int ustMenuId = 0;
            int menuId = 0;
            if (filterContext.RouteData.Values["menuId"] != null)
            {
                menuId = Convert.ToInt32(filterContext.RouteData.Values["menuId"].ToString());
                if (filterContext.RouteData.Values["ustMenuId"] != null)
                    ustMenuId = Convert.ToInt32(filterContext.RouteData.Values["ustMenuId"].ToString());
            }

            ViewBag.ustMenuId = ustMenuId.ToString();
            ViewBag.menuId = menuId.ToString();
        }

        public void LogEkle(string kullanici, string logTipi, string logIslemi, string mesaj, bool hataDurum, string hata)
        {
            LiveMedyLogLogKayitlari logEkle = new LiveMedyLogLogKayitlari();
            logEkle.Tip = logTipi;
            logEkle.Islem = logIslemi;
            logEkle.Kullanici = kullanici;
            logEkle.Mesaj = mesaj;
            logEkle.HataDurum = hataDurum;
            logEkle.HataMesaji = hata;
            logEkle.Ip = YonetimPanelYardimciServisi.IpGetir();
            logEkle.KayitTarihi = DateTime.Now;

            db.LiveMedyLogLogKayitlari.Add(logEkle);
            db.SaveChanges();
        }


        public void FotografKaydet(string fotoBase64, string fotoUrl, int genislik, int yukseklik)
        {
            byte[] bytes = Convert.FromBase64String(fotoBase64.Replace("data:image/png;base64,", ""));

            Image image;
            using (MemoryStream ms = new MemoryStream(bytes))
            {
                image = Image.FromStream(ms);
            }

            var thumbnailImg = new Bitmap(genislik, yukseklik);
            var thumbGraph = Graphics.FromImage(thumbnailImg);
            thumbGraph.CompositingQuality = CompositingQuality.HighQuality;
            thumbGraph.SmoothingMode = SmoothingMode.HighQuality;
            thumbGraph.InterpolationMode = InterpolationMode.HighQualityBicubic;
            var imageRectangle = new Rectangle(0, 0, genislik, yukseklik);
            thumbGraph.DrawImage(image, imageRectangle);
            thumbnailImg.Save(fotoUrl, System.Drawing.Imaging.ImageFormat.Jpeg);
        }

        protected void SiteMesajiKaydet(bool islemDurum, string mesaj)
        {
            ViewBag.IslemDurum = islemDurum;
            ViewBag.Mesaj = mesaj;

            TempData["IslemDurum"] = islemDurum;
            TempData["Mesaj"] = mesaj;
        }

        protected void SiteMesajiKaydet(bool islemDurum)
        {
            string mesaj;

            if (islemDurum)
            {
                mesaj = "İşlem başarılı.";
            }
            else
            {
                mesaj = "İşlem başarısız";
            }

            ViewBag.IslemDurum = islemDurum;
            ViewBag.Mesaj = mesaj;

            TempData["IslemDurum"] = islemDurum;
            TempData["Mesaj"] = mesaj;
        }

        private void SiteMesajiOlustur()
        {
            if (TempData["IslemDurum"] != null && TempData["Mesaj"] != null)
            {
                ViewBag.IslemDurum = Convert.ToBoolean(TempData["IslemDurum"]);
                ViewBag.Mesaj = TempData["Mesaj"];
            }
        }


    }
}
