using System;
using System.Collections.Generic;

#nullable disable

namespace LiveMedy.Models
{
    public partial class LiveMedyYntUygulamaKontrol
    {
        public int KontrolSonucId { get; set; }
        public int? UygulamaId { get; set; }
        public string StatusCode { get; set; }
        public string Aciklama { get; set; }
        public DateTime? Tarih { get; set; }
        public string IpAdres { get; set; }
        public int? KullaniciId { get; set; }

        public virtual LiveMedyYntYoneticiler Kullanici { get; set; }
        public virtual LiveMedyYntUygulamalar Uygulama { get; set; }
    }
}
