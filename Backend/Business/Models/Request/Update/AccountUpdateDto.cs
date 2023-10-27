using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Models.Request.Update
{
    public class AccountUpdateDto
    {
        public decimal Balance { get; set; }
        public int UserId { get; set; }
    }
}
