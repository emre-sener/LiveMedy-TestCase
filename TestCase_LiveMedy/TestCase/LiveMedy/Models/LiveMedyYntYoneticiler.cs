using System;
using System.Collections.Generic;

#nullable disable

namespace LiveMedy.Models
{
    public partial class LiveMedyYntYoneticiler
    {
        public LiveMedyYntYoneticiler()
        {
            LiveMedyYntUygulamaKontrol = new HashSet<LiveMedyYntUygulamaKontrol>();
            LiveMedyYntUygulamalar = new HashSet<LiveMedyYntUygulamalar>();
        }

        public int YoneticiId { get; set; }
        public string Adi { get; set; }
        public string Soyadi { get; set; }
        public string KullaniciAdi { get; set; }
        public string Eposta { get; set; }
        public string Sifre { get; set; }
        public string TelefonNo { get; set; }
        public int RolId { get; set; }
        public bool? AktiveEdildiMi { get; set; }
        public string AktivasyonNumarasi { get; set; }
        public bool? AktifMi { get; set; }
        public bool? IptalMi { get; set; }
        public string IptalNedeni { get; set; }
        public DateTime? SonGirisTarihi { get; set; }
        public DateTime? EklemeTarihi { get; set; }
        public DateTime? GuncellemeTarihi { get; set; }

        public virtual LiveMedyYntRoller Rol { get; set; }
        public virtual ICollection<LiveMedyYntUygulamaKontrol> LiveMedyYntUygulamaKontrol { get; set; }
        public virtual ICollection<LiveMedyYntUygulamalar> LiveMedyYntUygulamalar { get; set; }
    }
}
