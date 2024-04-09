using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNet.Authentication.Cookies;
using System.Net;
using LiveMedy.Models;
using Microsoft.EntityFrameworkCore;

namespace LiveMedy
{

    public class Startup
    {

        public Startup(IConfiguration configuration)
        {

            Configuration = configuration;
            ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls12 | SecurityProtocolType.Tls13;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddControllers(options => options.SuppressAsyncSuffixInActionNames = false);
            services.AddSingleton<IFileProvider>(new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")));
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddMvc(option => option.EnableEndpointRouting = false);
            services.AddHttpContextAccessor();
            services.AddDistributedMemoryCache();
            services.AddSession(options =>
            {
                options.IdleTimeout = System.TimeSpan.FromMinutes(20);
                options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
                options.Cookie.IsEssential = true;
                options.Cookie.HttpOnly = true;
            });

            services.AddHttpsRedirection(options =>
            {
                options.RedirectStatusCode = StatusCodes.Status308PermanentRedirect;
                options.HttpsPort = 443;
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Latest);
            services.AddDbContext<LiveMedyContext>(options => options.UseSqlServer(Configuration.GetConnectionString("LiveMedyContext")));
            services.AddMvc().AddRazorRuntimeCompilation();
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie();
        }

        [Obsolete]
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseMiddleware(typeof(Models.Servisler.HataServisi));
                app.UseHsts();
            }

            Models.Servisler.HttpAncessorGetir.Configure(app.ApplicationServices.GetRequiredService<IHttpContextAccessor>());
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseSession();

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                var lang = System.Threading.Thread.CurrentThread.CurrentCulture.TwoLetterISOLanguageName;
                routes.MapRoute(name: "AdminPanel", template: "{area}/{controller}/{action}/{id?}");

                routes.MapRoute(name: "Home", template: "/", defaults: new { dil = lang, controller = "Home", action = "Index" });
  

            });
        }
    }
}
