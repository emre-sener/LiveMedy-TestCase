using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LiveMedy.Controllers
{
    public class HataController : Controller
    {
        protected IHttpContextAccessor _accessor;
        public HataController(IHttpContextAccessor accessor)
        {
            _accessor = accessor;
        }

        [Route("/Hata/HataSayfasi")]
        public IActionResult HataSayfasi(int code)
        {
            var context = _accessor.HttpContext.Request;

            if (code == 404)
            {
                ViewBag.ErrorMessage = "İstek yapılan kaynağın (veya sayfanın) bulunamadı.";
            }
            else if (code == 400)
            {
                ViewBag.ErrorMessage = "Sayfa Bulunamadı.";
            }
            else if (code == 500)
            {
                ViewBag.ErrorMessage = "Sunucuda bir hata oluştu ve istek karşılanamadı.";
            }
            else
            {
                ViewBag.ErrorMessage = "İşleminiz gerçekleştirilirken bir hata oluştu..";
            }

            ViewBag.RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            ViewBag.ShowRequestId = !string.IsNullOrEmpty(ViewBag.RequestId);
            ViewBag.ErrorStatusCode = code;

            return View();
        }
    }
}