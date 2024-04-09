using Microsoft.AspNetCore.Http;
using System;
using System.Net.Mail;
using System.Web;

namespace LiveMedy.Models.Servisler
{
    public class YardimciServisi
    {
        public static string IpGetir()
        {
            string ip = LiveMedy.Models.Servisler.HttpAncessorGetir.HttpContext?.Connection?.RemoteIpAddress?.ToString();
            if (string.IsNullOrEmpty(ip))
            {
                ip = LiveMedy.Models.Servisler.HttpAncessorGetir.HttpContext?.Connection?.LocalIpAddress?.ToString();
            }
            return ip;
        }
    }
}