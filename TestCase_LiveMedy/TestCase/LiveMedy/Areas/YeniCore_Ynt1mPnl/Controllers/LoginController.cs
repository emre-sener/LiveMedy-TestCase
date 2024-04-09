
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.Servisler;
using LiveMedy.Extensions;
using LiveMedy.Models;
using LiveMedy.Models.Servisler;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Controllers
{
    [Area("YeniCore_Ynt1mPnl")]
    public class LoginController : Controller
    {
        string ipAdresi = "";
        public IActionResult Giris()
        {
            return View();
        }
        protected IHttpContextAccessor _accessor;
        public LoginController(IHttpContextAccessor accessor)
        {
            _accessor = accessor;
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Giris(LiveMedyYntYoneticiler yonetici, IFormCollection fc)
        {
           
            if (!await GoogleCaptchaHelper.IsReCaptchaPassedAsync(Request.Form["g-recaptcha-response"], "6Ld-IHkpAAAAAKoyG8yxSVf1xsfy_m-_GcY-7Zch"))
            {
                ViewBag.IslemDurum = false;

                ViewBag.Mesaj = "Lütfen robot olmadığınızı doğrulayın.";
               
                return View();

            }
            else
            {
                if (ModelState.IsValid)
                {
                    if (GirisServisi.GirisYap(yonetici.KullaniciAdi, yonetici.Sifre))
                    {
            
                        int dil = 1;
                        _accessor.HttpContext.Session.SetInt32("AdminDilId", dil);

                        var claims = new List<Claim>
                         {
                             new Claim(ClaimTypes.Name, yonetici.KullaniciAdi+";"+yonetici.Sifre)
                         };

                        var userIdentity = new ClaimsIdentity(claims, "login");

                        ClaimsPrincipal principal = new ClaimsPrincipal(userIdentity);
                        await HttpContext.SignInAsync(principal);
                        ipAdresi = _accessor.HttpContext.Connection.RemoteIpAddress.ToString();
                        int girisIzinDurumu = GirisServisi.IpGirisIzinDurumu(ipAdresi);

                        if (girisIzinDurumu == 1)
                        {
                            return RedirectToAction("Index", "AdminAnasayfa", new { area = "YeniCore_Ynt1mPnl" });
                        }
                        else
                        {
  
                            return Redirect("/tr/Anasayfa");
                        }
                      
                    }
                    else
                    {
                        ViewBag.IslemDurum = false;
                        ViewBag.Mesaj = "Parola veya Kullanıcı adı hatalı.";
                    }
                    return View();
                }
                else
                {
                    ViewBag.IslemDurum = false;
                    ViewBag.Mesaj = "Boş bırakılan alan/alanlar vardır!";
                    return View();
                }
            }

        }


        public async Task<IActionResult> Cikis()
        {
            await HttpContext.SignOutAsync();

            return RedirectToAction("Giris");
        }
        public IActionResult OturumUzat()
        {
            System.Int32 timeout = 20;
            ViewBag.SureAsimi = timeout;
            return Json("");
        }
    }
}