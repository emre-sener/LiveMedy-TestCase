using System;
using System.Collections.Generic;

#nullable disable

namespace LiveMedy.Models
{
    public partial class LiveMedyYntUygulamalar
    {
        public LiveMedyYntUygulamalar()
        {
            LiveMedyYntUygulamaKontrol = new HashSet<LiveMedyYntUygulamaKontrol>();
        }

        public int UygulamaId { get; set; }
        public string UygulamaAdi { get; set; }
        public string UygulamaAciklama { get; set; }
        public string UygulamaUrl { get; set; }
        public int? Sira { get; set; }
        public bool? AktifMi { get; set; }
        public DateTime? EklenmeTarihi { get; set; }
        public DateTime? GuncellenmeTarihi { get; set; }
        public string IpAdres { get; set; }
        public int? KullaniciId { get; set; }

        public virtual LiveMedyYntYoneticiler Kullanici { get; set; }
        public virtual ICollection<LiveMedyYntUygulamaKontrol> LiveMedyYntUygulamaKontrol { get; set; }
    }
}
