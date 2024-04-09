using System;
using System.Collections.Generic;

#nullable disable

namespace LiveMedy.Models
{
    public partial class LiveMedyYntRoller
    {
        public LiveMedyYntRoller()
        {
            LiveMedyYntHaklar = new HashSet<LiveMedyYntHaklar>();
            LiveMedyYntYoneticiler = new HashSet<LiveMedyYntYoneticiler>();
        }

        public int RolId { get; set; }
        public string Adi { get; set; }
        public bool? SabitMi { get; set; }

        public virtual ICollection<LiveMedyYntHaklar> LiveMedyYntHaklar { get; set; }
        public virtual ICollection<LiveMedyYntYoneticiler> LiveMedyYntYoneticiler { get; set; }
    }
}
