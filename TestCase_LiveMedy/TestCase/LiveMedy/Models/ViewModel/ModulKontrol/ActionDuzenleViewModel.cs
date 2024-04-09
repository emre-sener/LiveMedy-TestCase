using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace LiveMedy.Models.ViewModel.ModulKontrol
{
    public class ActionDuzenleViewModel
    {
        [Required]
        public int ActionId { get; set; }

        [Required]
        public int ControllerId { get; set; }

        [Required]
        public string ActionAdi { get; set; }

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
