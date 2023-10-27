using Infrastructure.Data.Postgres.Entities.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Postgres.Entities
{
    public class Account : Entity<int>
    {
        public decimal Balance { get; set; }

        // Referans
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
