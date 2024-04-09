using System;
using System.Collections.Generic;

#nullable disable

namespace LiveMedy.Models
{
    public partial class LiveMedyGnlDiller
    {
        public LiveMedyGnlDiller()
        {
            LiveMedyYntYoneticiIslemleri = new HashSet<LiveMedyYntYoneticiIslemleri>();
        }

        public int DilId { get; set; }
        public string Dil { get; set; }
        public string ResourceFileName { get; set; }
        public string Culture { get; set; }

        public virtual ICollection<LiveMedyYntYoneticiIslemleri> LiveMedyYntYoneticiIslemleri { get; set; }
    }
}
