using Infrastructure.Data.Postgres.Entities.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Postgres.Entities
{
    public class Transaction : Entity<int>
    {
        public decimal Amount { get; set; }
        public int FromAccountId { get; set; }
        public Account FromAccount { get; set; }
        public int ToAccountId { get; set; }
        public Account ToAccount { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
