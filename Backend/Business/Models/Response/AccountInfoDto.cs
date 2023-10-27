using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Models.Response
{
    public class AccountInfoDto
    {
        public int Id { get; set; } = default!;
        public decimal Balance { get; set; }
        public int UserId { get; set; }
    }
}
