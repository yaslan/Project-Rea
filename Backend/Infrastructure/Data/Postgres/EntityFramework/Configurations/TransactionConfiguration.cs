using Infrastructure.Data.Postgres.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Postgres.EntityFramework.Configurations
{
    public class TransactionConfiguration : IEntityTypeConfiguration<Transaction>
    {
        public void Configure(EntityTypeBuilder<Transaction> builder)
        {
            builder.ToTable("Transactions"); // Veritabanı tablosu adı

            builder.HasKey(t => t.Id);
            builder.Property(t => t.FromAccountId).IsRequired();
            builder.Property(t => t.ToAccountId).IsRequired();
            builder.Property(t => t.Amount).IsRequired();

            builder.HasOne(t => t.FromAccount)
                   .WithMany()
                   .HasForeignKey(t => t.FromAccountId)
                   .OnDelete(DeleteBehavior.Restrict); // İstenirse silme davranışını ayarlayabilirsiniz.

            builder.HasOne(t => t.ToAccount)
                   .WithMany()
                   .HasForeignKey(t => t.ToAccountId)
                   .OnDelete(DeleteBehavior.Restrict); // İstenirse silme davranışını ayarlayabilirsiniz.

            builder.HasOne(t => t.User)
                   .WithMany(u => u.Transactions)
                   .HasForeignKey(t => t.UserId)
                   .OnDelete(DeleteBehavior.Cascade); // İstenirse silme davranışını ayarlayabilirsiniz.
        }
    }
}
