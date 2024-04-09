using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using LiveMedy.Models;

namespace LiveMedy.Controllers
{
    public class HomeController : OnYuzController
    {
      

        public HomeController()
        {
            
        }

        public IActionResult Index()
        {
            return View();
        }

    }
}
