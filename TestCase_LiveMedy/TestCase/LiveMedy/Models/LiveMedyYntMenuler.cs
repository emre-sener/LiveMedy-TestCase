using System;
using System.Collections.Generic;

#nullable disable

namespace LiveMedy.Models
{
    public partial class LiveMedyYntMenuler
    {
        public int MenuId { get; set; }
        public string Adi { get; set; }
        public int? UstMenuId { get; set; }
        public string SayfaUrl { get; set; }
        public int? Sira { get; set; }
        public bool? AktifMi { get; set; }
        public string BagliController { get; set; }
    }
}
