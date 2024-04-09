using System;
using System.Collections.Generic;

#nullable disable

namespace LiveMedy.Models
{
    public partial class LiveMedyYntHaklar
    {
        public int HakId { get; set; }
        public int RolId { get; set; }
        public int? AksiyonId { get; set; }

        public virtual LiveMedyYntAksiyonlar Aksiyon { get; set; }
        public virtual LiveMedyYntRoller Rol { get; set; }
    }
}
