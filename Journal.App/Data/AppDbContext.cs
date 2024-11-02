using Journal.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Journal.App.Data
{
    public class AppDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Color> Colors { get; init; }
        public DbSet<Specialization> Specializations { get; init; }
        public DbSet<Employee> Employees { get; init; }
        public DbSet<Duty> Duties { get; init; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Color>()
                .HasKey(color => color.HexCode);

            modelBuilder.Entity<Color>()
                .Property(color => color.HexCode)
                .IsRequired()
                .HasMaxLength(10);

            modelBuilder.Entity<Specialization>()
                .Property(specialization => specialization.Name)
                .IsRequired()
                .HasMaxLength(50);

            modelBuilder.Entity<Employee>()
                .Property(employee => employee.Lastname)
                .IsRequired()
                .HasMaxLength(30);

            modelBuilder.Entity<Employee>()
                .Property(employee => employee.Name)
                .HasMaxLength(30);

            modelBuilder.Entity<Employee>()
                .Property(employee => employee.MiddleName)
                .HasMaxLength(30);
        }
    }
}
