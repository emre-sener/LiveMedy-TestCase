using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Controllers
{

    [Area("YeniCore_Ynt1mPnl")]
    public class AdminAnasayfaController : AdminPanelController
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}