using System;
using System.Collections.Generic;

#nullable disable

namespace LiveMedy.Models
{
    public partial class LiveMedyLogLogKayitlari
    {
        public int LogKayitId { get; set; }
        public string Tip { get; set; }
        public string Islem { get; set; }
        public string Kullanici { get; set; }
        public string Mesaj { get; set; }
        public bool? HataDurum { get; set; }
        public string HataMesaji { get; set; }
        public string Ip { get; set; }
        public DateTime? KayitTarihi { get; set; }
    }
}
