using System;
using System.Collections.Generic;

namespace App.Models
{
    public partial class Vendor
    {
        public Vendor()
        {
            Product = new HashSet<Product>();
        }

        public int VendorId { get; set; }
        public string VendorName { get; set; }
        public string VendorPhone { get; set; }
        public string VendorAddress { get; set; }
        public string VendorEmail { get; set; }

        public ICollection<Product> Product { get; set; }
    }
}
