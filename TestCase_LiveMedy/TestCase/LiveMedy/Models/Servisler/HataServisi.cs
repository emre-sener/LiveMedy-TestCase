using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Threading.Tasks;

namespace LiveMedy.Models.Servisler
{
    public class HataServisi
    {
        private readonly RequestDelegate next;
        public HataServisi(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception ex)
        {
            var result = JsonConvert.SerializeObject(new { error = ex.Message });
            //Log.LogServisi.LogEkle("", "Error", "User", "Beklenmedik Hata", ex);
            //context.Response.Redirect("/Anasayfa/Error");
            return context.Response.WriteAsync(result);
        }
    }
}
