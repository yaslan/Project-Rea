using Infrastructure.Data.Postgres.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Postgres.EntityFramework.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("Users"); // Veritabanı tablosu adı

        builder.HasKey(u => u.Id);
        builder.Property(u => u.Email).IsRequired();
        builder.Property(u => u.UserName).IsRequired();
        builder.Property(u => u.FullName).IsRequired();
        builder.Property(u => u.PasswordSalt).IsRequired();
        builder.Property(u => u.PasswordHash).IsRequired();
        builder.Property(u => u.UserType).IsRequired();

        builder.HasMany(u => u.Accounts)
               .WithOne(a => a.User)
               .HasForeignKey(a => a.UserId)
               .OnDelete(DeleteBehavior.Cascade); // İstenirse silme davranışını ayarlayabilirsiniz.

        builder.HasMany(u => u.Transactions)
               .WithOne(t => t.User)
               .HasForeignKey(t => t.UserId)
               .OnDelete(DeleteBehavior.Cascade); // İstenirse silme davranışını ayarlayabilirsiniz.
    }
}