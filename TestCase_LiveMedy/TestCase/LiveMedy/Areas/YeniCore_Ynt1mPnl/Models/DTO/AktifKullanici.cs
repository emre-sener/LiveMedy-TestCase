using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using LiveMedy.Models;
using LiveMedy.Models.Servisler;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.DTO
{
    public class AktifKullanici
    {
        public static LiveMedyYntYoneticiler KullaniciBilgileri
        {
            get
            {
                var context = HttpAncessorGetir.HttpContext;

                //var userId = context.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                // or

                string ip = context.Request.HttpContext.Connection.RemoteIpAddress.ToString();
                var user = HttpAncessorGetir.HttpContext.User.Identity;
                var ID = user.Name;
                if (ID != null)
                {
                    return KullaniciBilgileriniAl();
                }
                else
                {
                    return null;
                }
            }
        }
       
        public static LiveMedyYntYoneticiler KullaniciBilgileriniAl()
        {
            string kullaniciAdi = HttpAncessorGetir.HttpContext.User.Identity.IsAuthenticated ? HttpAncessorGetir.HttpContext.User.Identity.Name.Split(';')[0] : null;
            //string sifre = LiveMedy.Models.Servisler.HttpAncessorGetir.HttpContext.User.Identity.IsAuthenticated ? LiveMedy.Models.Servisler.HttpAncessorGetir.HttpContext.User.Identity.Name.Split(';')[1] : "0";

            using (var db = new LiveMedyContext())
            {
                var yonetici = (from y in db.LiveMedyYntYoneticiler.Include("Rol.LiveMedyYntHaklar.Aksiyon")
                                where y.KullaniciAdi == kullaniciAdi
                                select y).FirstOrDefault();
                return yonetici;
            }
        }
    }
}
