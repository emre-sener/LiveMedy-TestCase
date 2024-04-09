using System;
using System.Collections.Generic;

#nullable disable

namespace LiveMedy.Models
{
    public partial class LiveMedyYntAksiyonlar
    {
        public LiveMedyYntAksiyonlar()
        {
            LiveMedyYntHaklar = new HashSet<LiveMedyYntHaklar>();
        }

        public int AksiyonId { get; set; }
        public string Adi { get; set; }
        public string KontrolAdi { get; set; }
        public bool? AktifMi { get; set; }
        public DateTime? EklenmeTarihi { get; set; }
        public DateTime? GuncellenmeTarihi { get; set; }

        public virtual ICollection<LiveMedyYntHaklar> LiveMedyYntHaklar { get; set; }
    }
}
