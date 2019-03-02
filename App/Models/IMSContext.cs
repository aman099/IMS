using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace App.Entitity
{
    public partial class IMSContext : DbContext
    {
        public virtual DbSet<AspNetRoleClaims> AspNetRoleClaims { get; set; }
        public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }
        public virtual DbSet<AspNetUserTokens> AspNetUserTokens { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Membertype> Membertype { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Vendor> Vendor { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=.;Database=IMS;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AspNetRoleClaims>(entity =>
            {
                entity.HasIndex(e => e.RoleId);

                entity.Property(e => e.RoleId).IsRequired();

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetRoleClaims)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<AspNetRoles>(entity =>
            {
                entity.HasIndex(e => e.NormalizedName)
                    .HasName("RoleNameIndex");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetUserClaims>(entity =>
            {
                entity.HasIndex(e => e.UserId);

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserLogins>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

                entity.HasIndex(e => e.UserId);

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserRoles>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId });

                entity.HasIndex(e => e.RoleId);

                entity.HasIndex(e => e.UserId);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.RoleId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUsers>(entity =>
            {
                entity.HasIndex(e => e.NormalizedEmail)
                    .HasName("EmailIndex");

                entity.HasIndex(e => e.NormalizedUserName)
                    .HasName("UserNameIndex")
                    .IsUnique()
                    .HasFilter("([NormalizedUserName] IS NOT NULL)");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetUserTokens>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("category");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.CategoryName)
                    .HasColumnName("categoryName")
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<Membertype>(entity =>
            {
                entity.ToTable("membertype");

                entity.Property(e => e.MemberTypeId).HasColumnName("memberTypeId");

                entity.Property(e => e.MarginPercentage).HasColumnName("marginPercentage");

                entity.Property(e => e.MemberTypeCode)
                    .HasColumnName("memberTypeCode")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.HasKey(e => e.OrderId);

                entity.ToTable("orders");

                entity.Property(e => e.OrderId).HasColumnName("orderId");

                entity.Property(e => e.EnterBy)
                    .HasColumnName("enterBy")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.EnterDate)
                    .HasColumnName("enterDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.MemberTypeId).HasColumnName("memberTypeId");

                entity.Property(e => e.ModifiedBy)
                    .HasColumnName("modifiedBy")
                    .HasMaxLength(200);

                entity.Property(e => e.ModifiedDate)
                    .HasColumnName("modifiedDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.HasOne(d => d.MemberType)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.MemberTypeId)
                    .HasConstraintName("FK__orders__memberTy__45F365D3");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__orders__productI__44FF419A");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("product");

                entity.Property(e => e.ProductId).HasColumnName("productId");

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.EnterBy)
                    .HasColumnName("enterBy")
                    .HasMaxLength(200);

                entity.Property(e => e.EnterDate)
                    .HasColumnName("enterDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.ModifiedBy)
                    .HasColumnName("modifiedBy")
                    .HasMaxLength(200);

                entity.Property(e => e.ModifiedDate)
                    .HasColumnName("modifiedDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.ProductCode)
                    .HasColumnName("productCode")
                    .HasMaxLength(100);

                entity.Property(e => e.ProductName)
                    .HasColumnName("productName")
                    .HasMaxLength(200);

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.VendorId).HasColumnName("vendorId");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Product)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__product__categor__3C69FB99");

                entity.HasOne(d => d.Vendor)
                    .WithMany(p => p.Product)
                    .HasForeignKey(d => d.VendorId)
                    .HasConstraintName("FK__product__vendorI__3B75D760");
            });

            modelBuilder.Entity<Vendor>(entity =>
            {
                entity.ToTable("vendor");

                entity.Property(e => e.VendorId).HasColumnName("vendorId");

                entity.Property(e => e.VendorAddress)
                    .HasColumnName("vendorAddress")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.VendorEmail)
                    .HasColumnName("vendorEmail")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.VendorName)
                    .HasColumnName("vendorName")
                    .HasMaxLength(200);

                entity.Property(e => e.VendorPhone)
                    .HasColumnName("vendorPhone")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });
        }
    }
}
