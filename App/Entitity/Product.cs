using System;
using System.Collections.Generic;

namespace App.Entitity
{
    public partial class Product
    {
        public Product()
        {
            Orders = new HashSet<Orders>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public int? VendorId { get; set; }
        public int? CategoryId { get; set; }
        public int? Quantity { get; set; }
        public double? Price { get; set; }
        public DateTime? EnterDate { get; set; }
        public string EnterBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Category Category { get; set; }
        public Vendor Vendor { get; set; }
        public ICollection<Orders> Orders { get; set; }
    }
}
