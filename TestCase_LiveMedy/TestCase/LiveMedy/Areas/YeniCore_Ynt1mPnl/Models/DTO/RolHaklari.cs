using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LiveMedy.Models;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.DTO
{
    public class RolHaklari
    {
        public LiveMedyYntRoller Rol { get; set; }
        public List<LiveMedyYntHaklar> Haklar { get; set; }
    }
}
