using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.DTO
{
    public class YuklenenFotograf
    {
        public string Icerik { get; set; }
        public string DosyaAdi { get; set; }
        public int? DosyaBoyutu { get; set; }
        public float? Genislik { get; set; }
        public float? Uzunluk { get; set; }
        public float? KesilecekYatayEksen { get; set; }
        public float? KesilecekDikeyEksen { get; set; }
        public int? KesilecekGenislik { get; set; }
        public int? KesilecekUzunluk { get; set; }
        public string Baslik { get; set; }
        public int? Sira { get; set; }
    }
}
