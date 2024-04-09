using Microsoft.Extensions.Configuration;
using System;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace LiveMedy.Models.Servisler
{
    public class MailServisi
    {
        private readonly IConfiguration _configuration;
        public static string gonderenAdres, gonderenAd, host, kullaniciAdim, sifrem;
        public MailServisi(IConfiguration configuration)
        {
            _configuration = configuration;

            gonderenAdres = _configuration.GetSection("EPostaBilgileri").GetSection("HostEmail").Value;
            gonderenAd = "LiveMedy Hata Kontrolü";
            host = _configuration.GetSection("EPostaBilgileri").GetSection("HostAdi").Value;
            kullaniciAdim = _configuration.GetSection("EPostaBilgileri").GetSection("KullaniciAdi").Value;
            sifrem = _configuration.GetSection("EPostaBilgileri").GetSection("Sifre").Value;
        }

       
       
        
        public static void MailYolla(string gonderenMailAdresi, string gonderenMailinGosterilenAdi, string gonderilecekAdres, string konu, string icerik, string mailSunucusu, string kullaniciAdi, string sifre)
        {
            //System.Net.Mail.MailMessage mailMsg = new System.Net.Mail.MailMessage();

            //mailMsg.Sender = new MailAddress(gonderenMailAdresi, gonderenMailinGosterilenAdi);
            //mailMsg.From = new MailAddress(gonderenMailAdresi, gonderenMailinGosterilenAdi);
            //mailMsg.To.Add(new MailAddress(gonderilecekAdres));
            //mailMsg.Subject = konu;
            //mailMsg.BodyEncoding = System.Text.Encoding.GetEncoding("utf-8");

            //System.Net.Mail.AlternateView plainView = System.Net.Mail.AlternateView.CreateAlternateViewFromString(System.Text.RegularExpressions.Regex.Replace(icerik, @"<(.|\n)*?>", string.Empty), null, "text/plain");
            //System.Net.Mail.AlternateView htmlView = System.Net.Mail.AlternateView.CreateAlternateViewFromString(icerik, null, "text/html");

            //mailMsg.AlternateViews.Add(plainView);
            //mailMsg.AlternateViews.Add(htmlView);
            //mailMsg.Headers.Add("precedence", gonderenMailAdresi);
            //mailMsg.Priority = System.Net.Mail.MailPriority.Normal;

            
            //SmtpClient smtp = new SmtpClient();
            //smtp.Host = mailSunucusu;
            //smtp.Credentials = new System.Net.NetworkCredential(kullaniciAdi, sifre);           

            //smtp.Send(mailMsg);
        }
      

    }
}