using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.Servisler;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Controllers
{
 
    [Area("YeniCore_Ynt1mPnl")]
    public class AdminMesajController : Controller
    {
        public ViewResult Yetkisiz()
        {
            return View((object)GirisServisi.YetkiMesaji());
        }
    }
}