using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LiveMedy.Models.DTO
{
    public class LoginViewModel
    {
        public LoginModel LoginModel { get; set; }
        public string returnUrl { get; set; }
        public bool RememberMe { get; set; }
    }
    public class LoginModel
    {
        [Required(ErrorMessage = "Lütfen kullanıcı adınızı giriniz.")]
        public string KullaniciAdi { get; set; }

        [DataType(DataType.Password)]
        [Required(ErrorMessage = "Lütfen şifrenizi giriniz.")]
        public string Parola { get; set; }
    }
}
