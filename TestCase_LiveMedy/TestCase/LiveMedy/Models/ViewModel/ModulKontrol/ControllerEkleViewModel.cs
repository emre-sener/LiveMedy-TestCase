using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace LiveMedy.Models.ViewModel.ModulKontrol
{
    public class ControllerEkleViewModel
    {
        [Required]
        public int AppId { get; set; }

        [Required]
        public string ControllerAdi { get; set; }
        
        [Required]
        public int PasifYonlendirmeUrlId { get; set; }

        [Required]
        public int BakimdaYonlendirmeUrlId { get; set; }

        [Required]
        public int IptalYonlendirmeUrlId { get; set; }

        [MaxLength(500)]
        public string Aciklama { get; set; }

        public List<int> Kutular { get; set; }
    }
}
