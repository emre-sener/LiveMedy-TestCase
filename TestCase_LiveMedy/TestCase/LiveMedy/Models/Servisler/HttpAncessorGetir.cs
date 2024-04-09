using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LiveMedy.Models.Servisler
{
    public class HttpAncessorGetir
    {
        private static IHttpContextAccessor _accessor;
        public static void Configure(IHttpContextAccessor httpContextAccessor)
        {
            _accessor = httpContextAccessor;
        }
        public static HttpContext HttpContext => _accessor.HttpContext;
        public IEnumerable<string> IPadresiGetir()
        {
            var ip = _accessor.HttpContext?.Connection?.RemoteIpAddress?.ToString();
            return new string[] { ip, "value2" };
        }
    }
}
