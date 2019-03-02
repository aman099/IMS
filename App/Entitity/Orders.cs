using System;
using System.Collections.Generic;

namespace App.Entitity
{
    public partial class Orders
    {
        public int OrderId { get; set; }
        public int? ProductId { get; set; }
        public int? MemberTypeId { get; set; }
        public int? Quantity { get; set; }
        public double? Price { get; set; }
        public string EnterBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public DateTime? EnterDate { get; set; }

        public Membertype MemberType { get; set; }
        public Product Product { get; set; }
    }
}
