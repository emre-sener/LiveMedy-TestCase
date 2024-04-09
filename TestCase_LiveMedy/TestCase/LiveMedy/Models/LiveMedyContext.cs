using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace LiveMedy.Models
{
    public partial class LiveMedyContext : DbContext
    {
        public LiveMedyContext()
        {
        }

        public LiveMedyContext(DbContextOptions<LiveMedyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<LiveMedyGnlDiller> LiveMedyGnlDiller { get; set; }
        public virtual DbSet<LiveMedyLogLogKayitlari> LiveMedyLogLogKayitlari { get; set; }
        public virtual DbSet<LiveMedyYntAksiyonlar> LiveMedyYntAksiyonlar { get; set; }
        public virtual DbSet<LiveMedyYntHaklar> LiveMedyYntHaklar { get; set; }
        public virtual DbSet<LiveMedyYntMenuler> LiveMedyYntMenuler { get; set; }
        public virtual DbSet<LiveMedyYntRoller> LiveMedyYntRoller { get; set; }
        public virtual DbSet<LiveMedyYntUygulamaKontrol> LiveMedyYntUygulamaKontrol { get; set; }
        public virtual DbSet<LiveMedyYntUygulamalar> LiveMedyYntUygulamalar { get; set; }
        public virtual DbSet<LiveMedyYntYoneticiIslemleri> LiveMedyYntYoneticiIslemleri { get; set; }
        public virtual DbSet<LiveMedyYntYoneticiler> LiveMedyYntYoneticiler { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=94.199.202.242;Initial Catalog=futbola1_livemedy;User ID=TstCase;Password=Asdasd11?.;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("TstCase")
                .HasAnnotation("Relational:Collation", "Turkish_CI_AS");

            modelBuilder.Entity<LiveMedyGnlDiller>(entity =>
            {
                entity.HasKey(e => e.DilId)
                    .HasName("PK71")
                    .IsClustered(false);

                entity.ToTable("LiveMedy_GNL_Diller", "dbo");

                entity.Property(e => e.DilId).ValueGeneratedNever();

                entity.Property(e => e.Culture).HasMaxLength(50);

                entity.Property(e => e.Dil).HasMaxLength(50);

                entity.Property(e => e.ResourceFileName).HasMaxLength(50);
            });

            modelBuilder.Entity<LiveMedyLogLogKayitlari>(entity =>
            {
                entity.HasKey(e => e.LogKayitId)
                    .HasName("PK_FTB_LOG_LogKayitlari");

                entity.ToTable("LiveMedy_LOG_LogKayitlari", "dbo");

                entity.Property(e => e.HataMesaji).HasMaxLength(500);

                entity.Property(e => e.Ip).HasMaxLength(50);

                entity.Property(e => e.Islem).HasMaxLength(50);

                entity.Property(e => e.Kullanici).HasMaxLength(50);

                entity.Property(e => e.Mesaj).HasMaxLength(150);

                entity.Property(e => e.Tip).HasMaxLength(50);
            });

            modelBuilder.Entity<LiveMedyYntAksiyonlar>(entity =>
            {
                entity.HasKey(e => e.AksiyonId)
                    .HasName("PK_FTB_YNT_Aksiyonlar");

                entity.ToTable("LiveMedy_YNT_Aksiyonlar", "dbo");

                entity.Property(e => e.Adi).HasMaxLength(100);

                entity.Property(e => e.AktifMi).HasDefaultValueSql("((1))");

                entity.Property(e => e.EklenmeTarihi)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.GuncellenmeTarihi).HasColumnType("datetime");

                entity.Property(e => e.KontrolAdi).HasMaxLength(100);
            });

            modelBuilder.Entity<LiveMedyYntHaklar>(entity =>
            {
                entity.HasKey(e => e.HakId)
                    .HasName("PK23")
                    .IsClustered(false);

                entity.ToTable("LiveMedy_YNT_Haklar", "dbo");

                entity.HasOne(d => d.Aksiyon)
                    .WithMany(p => p.LiveMedyYntHaklar)
                    .HasForeignKey(d => d.AksiyonId)
                    .HasConstraintName("FK_FTB_YNT_Haklar_FTB_YNT_Aksiyonlar");

                entity.HasOne(d => d.Rol)
                    .WithMany(p => p.LiveMedyYntHaklar)
                    .HasForeignKey(d => d.RolId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("RefASPS_YON_Roller15");
            });

            modelBuilder.Entity<LiveMedyYntMenuler>(entity =>
            {
                entity.HasKey(e => e.MenuId)
                    .HasName("PK_FTB_YON_Menuler");

                entity.ToTable("LiveMedy_YNT_Menuler", "dbo");

                entity.Property(e => e.Adi).HasMaxLength(50);

                entity.Property(e => e.BagliController).HasMaxLength(250);

                entity.Property(e => e.SayfaUrl).HasMaxLength(250);
            });

            modelBuilder.Entity<LiveMedyYntRoller>(entity =>
            {
                entity.HasKey(e => e.RolId)
                    .HasName("PK22")
                    .IsClustered(false);

                entity.ToTable("LiveMedy_YNT_Roller", "dbo");

                entity.Property(e => e.Adi).HasMaxLength(50);
            });

            modelBuilder.Entity<LiveMedyYntUygulamaKontrol>(entity =>
            {
                entity.HasKey(e => e.KontrolSonucId);

                entity.ToTable("LiveMedy_YNT_UygulamaKontrol", "dbo");

                entity.Property(e => e.IpAdres).HasMaxLength(50);

                entity.Property(e => e.StatusCode).HasMaxLength(50);

                entity.Property(e => e.Tarih).HasColumnType("datetime");

                entity.HasOne(d => d.Kullanici)
                    .WithMany(p => p.LiveMedyYntUygulamaKontrol)
                    .HasForeignKey(d => d.KullaniciId)
                    .HasConstraintName("FK_LiveMedy_YNT_UygulamaKontrol_LiveMedy_YNT_Yoneticiler");

                entity.HasOne(d => d.Uygulama)
                    .WithMany(p => p.LiveMedyYntUygulamaKontrol)
                    .HasForeignKey(d => d.UygulamaId)
                    .HasConstraintName("FK_LiveMedy_YNT_UygulamaKontrol_LiveMedy_YNT_Uygulamalar");
            });

            modelBuilder.Entity<LiveMedyYntUygulamalar>(entity =>
            {
                entity.HasKey(e => e.UygulamaId);

                entity.ToTable("LiveMedy_YNT_Uygulamalar", "dbo");

                entity.Property(e => e.EklenmeTarihi).HasColumnType("datetime");

                entity.Property(e => e.GuncellenmeTarihi).HasColumnType("datetime");

                entity.Property(e => e.IpAdres).HasMaxLength(50);

                entity.Property(e => e.UygulamaAdi).HasMaxLength(250);

                entity.HasOne(d => d.Kullanici)
                    .WithMany(p => p.LiveMedyYntUygulamalar)
                    .HasForeignKey(d => d.KullaniciId)
                    .HasConstraintName("FK_LiveMedy_YNT_Uygulamalar_LiveMedy_YNT_Yoneticiler");
            });

            modelBuilder.Entity<LiveMedyYntYoneticiIslemleri>(entity =>
            {
                entity.HasKey(e => e.YoneticiIslemId)
                    .HasName("PK20")
                    .IsClustered(false);

                entity.ToTable("LiveMedy_YNT_YoneticiIslemleri", "dbo");

                entity.Property(e => e.Ip).HasMaxLength(50);

                entity.Property(e => e.IslemKodu).HasMaxLength(50);

                entity.HasOne(d => d.Dil)
                    .WithMany(p => p.LiveMedyYntYoneticiIslemleri)
                    .HasForeignKey(d => d.DilId)
                    .HasConstraintName("FK_FTB_YNT_YoneticiIslemleri_FTB_GNL_Diller");
            });

            modelBuilder.Entity<LiveMedyYntYoneticiler>(entity =>
            {
                entity.HasKey(e => e.YoneticiId)
                    .HasName("PK19")
                    .IsClustered(false);

                entity.ToTable("LiveMedy_YNT_Yoneticiler", "dbo");

                entity.Property(e => e.Adi).HasMaxLength(50);

                entity.Property(e => e.AktivasyonNumarasi).HasMaxLength(150);

                entity.Property(e => e.Eposta).HasMaxLength(150);

                entity.Property(e => e.IptalNedeni).HasMaxLength(150);

                entity.Property(e => e.KullaniciAdi).HasMaxLength(50);

                entity.Property(e => e.Sifre).HasMaxLength(150);

                entity.Property(e => e.Soyadi).HasMaxLength(50);

                entity.Property(e => e.TelefonNo)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.HasOne(d => d.Rol)
                    .WithMany(p => p.LiveMedyYntYoneticiler)
                    .HasForeignKey(d => d.RolId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_FTB_YNT_Yoneticiler_FTB_YNT_Roller");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
