using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace LiveMedy.Extensions
{

    // Karekter sayısına dikkat!!!!
    public class Sifreleme
    {
        AesCryptoServiceProvider AesSaglayiciDevelopment = new AesCryptoServiceProvider();
        private const string AESDevelopment_IV = "!{}q#ME<3OZ}(12!";
        private const string AESDevelopment_KEY = "Q%*%((em!#HEZ|M}";


        private string AESEncryptDevelopment(string text)
        {

            AesSaglayiciDevelopment.BlockSize = 128;
            AesSaglayiciDevelopment.KeySize = 128;

            AesSaglayiciDevelopment.IV = Encoding.UTF8.GetBytes(AESDevelopment_IV);
            AesSaglayiciDevelopment.Key = Encoding.UTF8.GetBytes(AESDevelopment_KEY);
            AesSaglayiciDevelopment.Mode = CipherMode.CBC;
            AesSaglayiciDevelopment.Padding = PaddingMode.PKCS7;

            byte[] kaynak = Encoding.Unicode.GetBytes(text);
            using (ICryptoTransform sifrele = AesSaglayiciDevelopment.CreateEncryptor())
            {
                byte[] hedef = sifrele.TransformFinalBlock(kaynak, 0, kaynak.Length);
                return Convert.ToBase64String(hedef);
            }
        }


        private string AESDecryptDevelopment(string EncryptText)
        {

            AesSaglayiciDevelopment.BlockSize = 128;
            AesSaglayiciDevelopment.KeySize = 128;

            AesSaglayiciDevelopment.IV = Encoding.UTF8.GetBytes(AESDevelopment_IV);
            AesSaglayiciDevelopment.Key = Encoding.UTF8.GetBytes(AESDevelopment_KEY);
            AesSaglayiciDevelopment.Mode = CipherMode.CBC;
            AesSaglayiciDevelopment.Padding = PaddingMode.PKCS7;

            byte[] kaynak = System.Convert.FromBase64String(EncryptText);
            using (ICryptoTransform decrypt = AesSaglayiciDevelopment.CreateDecryptor())
            {
                byte[] hedef = decrypt.TransformFinalBlock(kaynak, 0, kaynak.Length);
                return Encoding.Unicode.GetString(hedef);
            }

        }
        public byte[] AES_Encrypt(byte[] bytesToBeEncrypted, byte[] passwordBytes)
        {
            byte[] encryptedBytes = null;

            // Set your salt here, change it to meet your flavor:
            // The salt bytes must be at least 8 bytes.
            byte[] saltBytes = new byte[] { 1, 2, 3, 4, 5, 6, 7, 8 };

            using (MemoryStream ms = new MemoryStream())
            {
                using (RijndaelManaged AES = new RijndaelManaged())
                {
                    AES.KeySize = 256;
                    AES.BlockSize = 128;

                    var key = new Rfc2898DeriveBytes(passwordBytes, saltBytes, 1000);
                    AES.Key = key.GetBytes(AES.KeySize / 8);
                    AES.IV = key.GetBytes(AES.BlockSize / 8);

                    AES.Mode = CipherMode.CBC;

                    using (var cs = new CryptoStream(ms, AES.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(bytesToBeEncrypted, 0, bytesToBeEncrypted.Length);
                        cs.Close();
                    }
                    encryptedBytes = ms.ToArray();
                }
            }

            return encryptedBytes;
        }

        public byte[] AES_Decrypt(byte[] bytesToBeDecrypted, byte[] passwordBytes)
        {
            byte[] decryptedBytes = null;

            // Set your salt here, change it to meet your flavor:
            // The salt bytes must be at least 8 bytes.
            byte[] saltBytes = new byte[] { 1, 2, 3, 4, 5, 6, 7, 8 };

            using (MemoryStream ms = new MemoryStream())
            {
                using (RijndaelManaged AES = new RijndaelManaged())
                {
                    AES.KeySize = 256;
                    AES.BlockSize = 128;

                    var key = new Rfc2898DeriveBytes(passwordBytes, saltBytes, 1000);
                    AES.Key = key.GetBytes(AES.KeySize / 8);
                    AES.IV = key.GetBytes(AES.BlockSize / 8);

                    AES.Mode = CipherMode.CBC;

                    using (var cs = new CryptoStream(ms, AES.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(bytesToBeDecrypted, 0, bytesToBeDecrypted.Length);
                        cs.Close();
                    }
                    decryptedBytes = ms.ToArray();
                }
            }

            return decryptedBytes;
        }


        public void EncryptFile(string filename, string outfilename, string psw)
        {
            string file = filename;
            string password = psw;

            byte[] bytesToBeEncrypted = File.ReadAllBytes(file); //read bytes to encrypt them 
            byte[] passwordBytes = Encoding.UTF8.GetBytes(password); //read with UTF8 encoding the password.
            passwordBytes = SHA256.Create().ComputeHash(passwordBytes); //hash the psw

            byte[] bytesEncrypted = AES_Encrypt(bytesToBeEncrypted, passwordBytes);

            string fileEncrypted = outfilename;

            File.WriteAllBytes(fileEncrypted, bytesEncrypted);
        }
        public void DecryptFile(string filename, string outfilename, string psw)
        {
            string fileEncrypted = filename;
            string password = psw;

            byte[] bytesToBeDecrypted = File.ReadAllBytes(fileEncrypted);
            byte[] passwordBytes = Encoding.UTF8.GetBytes(password);
            passwordBytes = SHA256.Create().ComputeHash(passwordBytes);

            byte[] bytesDecrypted = AES_Decrypt(bytesToBeDecrypted, passwordBytes);

            string file = outfilename;
            File.WriteAllBytes(file, bytesDecrypted);
        }
        static byte[] EncryptStringToBytes_Aes(string plainText, byte[] Key, byte[] IV)
        {
            // Check arguments.
            if (plainText == null || plainText.Length <= 0)
                throw new ArgumentNullException("plainText");
            if (Key == null || Key.Length <= 0)
                throw new ArgumentNullException("Key");
            if (IV == null || IV.Length <= 0)
                throw new ArgumentNullException("IV");
            byte[] encrypted;

            // Create an Aes object
            // with the specified key and IV.
            using (Aes aesAlg = Aes.Create())
            {
                aesAlg.Key = Key;
                aesAlg.IV = IV;

                // Create an encryptor to perform the stream transform.
                ICryptoTransform encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);

                // Create the streams used for encryption.
                using (MemoryStream msEncrypt = new MemoryStream())
                {
                    using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                    {
                        using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
                        {
                            //Write all data to the stream.
                            swEncrypt.Write(plainText);
                        }
                        encrypted = msEncrypt.ToArray();
                    }
                }
            }

            // Return the encrypted bytes from the memory stream.
            return encrypted;
        }
        //     using (Aes myAes = Aes.Create())
        //        {

        //            // Encrypt the string to an array of bytes.
        //            byte[] encrypted = EncryptStringToBytes_Aes(original, myAes.Key, myAes.IV);

        //// Decrypt the bytes to a string.
        //string roundtrip = DecryptStringFromBytes_Aes(encrypted, myAes.Key, myAes.IV);

        ////Display the original data and the decrypted data.
        //Console.WriteLine("Original:   {0}", original);
        //            Console.WriteLine("Round Trip: {0}", roundtrip);
        //        }
        static string DecryptStringFromBytes_Aes(byte[] cipherText, byte[] Key, byte[] IV)
        {
            // Check arguments.
            if (cipherText == null || cipherText.Length <= 0)
                throw new ArgumentNullException("cipherText");
            if (Key == null || Key.Length <= 0)
                throw new ArgumentNullException("Key");
            if (IV == null || IV.Length <= 0)
                throw new ArgumentNullException("IV");

            // Declare the string used to hold
            // the decrypted text.
            string plaintext = null;

            // Create an Aes object
            // with the specified key and IV.
            using (Aes aesAlg = Aes.Create())
            {
                aesAlg.Key = Key;
                aesAlg.IV = IV;

                // Create a decryptor to perform the stream transform.
                ICryptoTransform decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);

                // Create the streams used for decryption.
                using (MemoryStream msDecrypt = new MemoryStream(cipherText))
                {
                    using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                    {
                        using (StreamReader srDecrypt = new StreamReader(csDecrypt))
                        {

                            // Read the decrypted bytes from the decrypting stream
                            // and place them in a string.
                            plaintext = srDecrypt.ReadToEnd();
                        }
                    }
                }
            }

            return plaintext;
        }
    }
}
