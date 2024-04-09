using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LiveMedy.Helpers
{
    public class StringHelper
    {
        public string NormalizeUTF8TurkishCharacters(string str)
        {

            string txt = str;

            List<string> utfCh = new List<string> { "Ä±", "Ã§", "ÅŸ", "Ã¶", "Ã¼", "ÄŸ", "Ä°", "Ã‡", "ÅŸ", "Ã–", "Ãœ", "ÄŸ" };
            List<string> utfChTR = new List<string> { "ı", "ç", "ş", "ö", "ü", "ğ", "İ", "Ç", "Ş", "Ö", "Ü", "Ğ" };


            for (int i = 0; i < utfCh.Count; i++)
            {
                txt = txt.Replace(utfCh[i], utfChTR[i]);
            }


            return txt;

        }
    }
}
