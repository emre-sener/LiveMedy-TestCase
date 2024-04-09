using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Localization;
using System;
using LiveMedy.Models;


namespace LiveMedy.Controllers
{
    public class OnYuzController : Controller
    {
        public string fileMapPath = "";

   
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {

            filterContext.HttpContext.Session.Remove("DilId");
            fileMapPath = "wwwroot\\";

            if ((string)filterContext.RouteData.Values["dil"] == "en")
            {
                ViewBag.DilId = 2;
                int dilId = ViewBag.DilId;
                ViewBag.Dil = "en";
                string dil = ViewBag.Dil;

                filterContext.HttpContext.Session.Remove("DilId");
                filterContext.HttpContext.Session.SetString("DilId", dilId.ToString());

                filterContext.HttpContext.Session.Remove("Dil");
                filterContext.HttpContext.Session.SetString("Dil", dil.ToString());

            }

            else
            {

                ViewBag.DilId = 1;
                int dilId = ViewBag.DilId;
                ViewBag.Dil = "tr";
                string dil = ViewBag.Dil;

                filterContext.HttpContext.Session.Remove("DilId");
                filterContext.HttpContext.Session.SetString("DilId", dilId.ToString());

                filterContext.HttpContext.Session.Remove("Dil");
                filterContext.HttpContext.Session.SetString("Dil", dil.ToString());

            }
        }

        public LiveMedyContext db = new LiveMedyContext();
        protected readonly IStringLocalizer<OnYuzController> _stringLocalizer;
        [Obsolete]
        protected readonly IHostingEnvironment _hostingEnvironment;

        [Obsolete]
        public OnYuzController(IStringLocalizer<OnYuzController> stringLocalizer, IHostingEnvironment hostingEnvironment)
        {
            _stringLocalizer = stringLocalizer;
            _hostingEnvironment = hostingEnvironment;
        }

        public OnYuzController()
        {

        }

        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
        

            if (ViewBag.tumAktifMenuler == null)
            {
                int dilId = ViewBag.DilId;
                filterContext.HttpContext.Session.SetString("DilId", dilId.ToString());

            }

            try
            {

                ViewBag.AktifDilId = ViewBag.DilId;
                int dilId = ViewBag.DilId;
            }
            catch (Exception ex)
            {
                ViewBag.HataMesajı = ex.Message;
            }

        }

        public static string GuidOlustur()
        {
            return Guid.NewGuid().ToString("N");
        }

        protected void SiteMesajiKaydet(bool islemDurum, string mesaj)
        {
            ViewBag.IslemDurum = islemDurum;
            ViewBag.Mesaj = mesaj;

            TempData["IslemDurum"] = islemDurum;
            TempData["Mesaj"] = mesaj;
        }

      
    }
}
