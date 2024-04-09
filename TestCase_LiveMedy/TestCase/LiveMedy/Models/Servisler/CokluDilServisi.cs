using Microsoft.Extensions.Localization;
using System.Reflection;
using LiveMedy.Resources;

namespace LiveMedy.Models.Servisler
{
    public class CokluDilServisi
    {
        private readonly IStringLocalizer _localizer;

        public CokluDilServisi(IStringLocalizerFactory factory)
        {
            var type = typeof(SharedResource);
            var assemblyName = new AssemblyName(type.GetTypeInfo().Assembly.FullName);
            _localizer = factory.Create("Resource", assemblyName.Name);
        }

        public LocalizedString YerelString(string key)
        {
            return _localizer[key];
        }
    }
}