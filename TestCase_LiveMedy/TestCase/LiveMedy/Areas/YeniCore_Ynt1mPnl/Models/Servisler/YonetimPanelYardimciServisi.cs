using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.DTO;
using LiveMedy.Models.Servisler.Log;

namespace LiveMedy.Areas.YeniCore_Ynt1mPnl.Models.Servisler
{
    public class YonetimPanelYardimciServisi
    {
        public static void DosyaSil(string dosyaUrl)
        {
            var dosya = Path.Combine(dosyaUrl);
            if (File.Exists(dosya))
            { File.Delete(dosya); }
        }

        internal static string HashAl(string gecerliSifre)
        {
            using (SHA1Managed sha1 = new SHA1Managed())
            {
                var hash = sha1.ComputeHash(Encoding.UTF8.GetBytes(gecerliSifre));
                var sb = new StringBuilder(hash.Length * 2);

                foreach (byte b in hash)
                {
                    sb.Append(b.ToString("X2"));
                }

                return sb.ToString();
            }
        }

        public static string IpGetir()
        {
            string ip = LiveMedy.Models.Servisler.HttpAncessorGetir.HttpContext?.Connection?.RemoteIpAddress?.ToString();
            if (string.IsNullOrEmpty(ip))
            {
                ip = LiveMedy.Models.Servisler.HttpAncessorGetir.HttpContext?.Connection?.LocalIpAddress?.ToString();
            }
            return ip;
        }
        public static string DosyaBoyutuGetir(IFormFile dosya)
        {
            return String.Format("{0:0.##}Mb", (double)dosya.Length / (double)1048576);  //mb olarak sonuc dondurur
        }
        public static void FotografiSil(string fotografUrl)
        {
            FileInfo dosya = new FileInfo((fotografUrl));
            if (dosya.Exists)
            {
                dosya.Delete();
            }
        }

        #region Fotograf Islemleri
        public static void FotografKaydet(string fotoBase64, string fotoUrl, int genislik, int yukseklik)
        {
            byte[] imageBytes = Convert.FromBase64String(fotoBase64);
            MemoryStream ms = new MemoryStream(imageBytes, 0, imageBytes.Length);
            ms.Write(imageBytes, 0, imageBytes.Length);
            System.Drawing.Image resim = System.Drawing.Image.FromStream(ms, true);
            resim = FotografiYenidenBoyutlandir(resim, genislik, yukseklik);
            resim.Save(fotoUrl, System.Drawing.Imaging.ImageFormat.Jpeg);
        }

        public static bool FotografiKaydet(YuklenenFotograf fotograf, string orjinalFotografUrl, string kesilecekFotografUrl)
        {
         
            try
            {
                string base64String = fotograf.Icerik.Substring(fotograf.Icerik.IndexOf(',') + 1);
                byte[] buffer = Convert.FromBase64String(base64String);
                Image resim;
                using (Stream sr = new MemoryStream(buffer))
                {
                    resim = Image.FromStream(sr);
                }
                if (!string.IsNullOrEmpty(orjinalFotografUrl))
                {
                    new Bitmap(resim).Save((orjinalFotografUrl + fotograf.DosyaAdi));
                }
                resim = FotografiYenidenBoyutlandir(resim, (int)fotograf.Genislik, (int)fotograf.Uzunluk);
                resim = FotografiKes(resim, new Rectangle((int)fotograf.KesilecekYatayEksen, (int)fotograf.KesilecekDikeyEksen, (int)fotograf.KesilecekGenislik, (int)fotograf.KesilecekUzunluk));
                resim.Save((kesilecekFotografUrl + fotograf.DosyaAdi));
                return true;
            }
            catch (Exception ex)
            {
                LogServisi.LogEkle(AktifKullanici.KullaniciBilgileri.KullaniciAdi, "Error", "Admin", "Admin Sunucuya Fotoğraf Yükleme Hatası", ex);
                return false;
            }
        }

        public static Image FotografiKes(Image resim, Rectangle kesilecekAlan)
        {
            var bmpImage = new Bitmap(resim);
            return bmpImage.Clone(kesilecekAlan, bmpImage.PixelFormat);
        }

        public static Bitmap FotografiYenidenBoyutlandir(Image resim, int genislik, int yukseklik)
        {
            var olusturulacakAlan = new Rectangle(0, 0, genislik, yukseklik);
            var olusturulacakResim = new Bitmap(genislik, yukseklik);

            olusturulacakResim.SetResolution(resim.HorizontalResolution, resim.VerticalResolution);

            using (var grafik = Graphics.FromImage(olusturulacakResim))
            {
                grafik.CompositingMode = CompositingMode.SourceCopy;
                grafik.CompositingQuality = CompositingQuality.HighQuality;
                grafik.InterpolationMode = InterpolationMode.HighQualityBicubic;
                grafik.SmoothingMode = SmoothingMode.HighQuality;
                grafik.PixelOffsetMode = PixelOffsetMode.HighQuality;

                using (var ozellikler = new ImageAttributes())
                {
                    ozellikler.SetWrapMode(WrapMode.TileFlipXY);
                    grafik.DrawImage(resim, olusturulacakAlan, 0, 0, resim.Width, resim.Height, GraphicsUnit.Pixel, ozellikler);
                }
            }

            return olusturulacakResim;
        }
        
        #endregion

    }
}
