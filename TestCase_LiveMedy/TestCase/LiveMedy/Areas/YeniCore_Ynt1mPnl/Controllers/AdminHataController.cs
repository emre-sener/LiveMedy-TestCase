using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using LiveMedy.Models;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Controllers
{

    [Area("YeniCore_Ynt1mPnl")]
    public class AdminHataController : AdminPanelController
    {
        public IActionResult Index()
        {
            return View();
        }
  

        public IActionResult HataSayfasi()
        {
            return View();
        }
    }
}