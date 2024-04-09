using System;
using System.Collections.Generic;

#nullable disable

namespace LiveMedy.Models
{
    public partial class LiveMedyYntYoneticiIslemleri
    {
        public int YoneticiIslemId { get; set; }
        public int? DilId { get; set; }
        public int YoneticiId { get; set; }
        public int? AksiyonId { get; set; }
        public string IslemKodu { get; set; }
        public string Aciklama { get; set; }
        public DateTime? Tarih { get; set; }
        public string Ip { get; set; }

        public virtual LiveMedyGnlDiller Dil { get; set; }
    }
}
