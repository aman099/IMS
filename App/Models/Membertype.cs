using System;
using System.Collections.Generic;

namespace App.Models
{
    public partial class Membertype
    {
        public Membertype()
        {
            Orders = new HashSet<Orders>();
        }

        public int MemberTypeId { get; set; }
        public string MemberTypeCode { get; set; }
        public double? MarginPercentage { get; set; }

        public ICollection<Orders> Orders { get; set; }
    }
}
