using App.Interface;
using App.Models;
using App.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Services
{
    public class VendorService : IVendor
    {
        private readonly AP_CorpContext _dbContext;
        public VendorService(AP_CorpContext dbContext)
        {
            _dbContext = dbContext;
        }
        public bool SaveVendor(VendorViewModel vendorViewModel)
        {
             var newVendor = new Vendor();
            if (vendorViewModel != null)
            {
                newVendor.VendorAddress = vendorViewModel.VendorAddress;
                newVendor.VendorEmail = vendorViewModel.VendorEmail;
                newVendor.VendorName = vendorViewModel.VendorName;
                newVendor.VendorPhone = vendorViewModel.VendorPhone;
                _dbContext.Add(newVendor);
                _dbContext.SaveChanges();
                return true;
            }
            else {
                return false;
            }
                       
        }

        public List<VendorViewModel> GetAllItems()
        {
        var itemList = (from aa in _dbContext.Vendor
            select new VendorViewModel
            {
                VendorAddress = aa.VendorAddress,
                VendorEmail = aa.VendorEmail,
                VendorId = aa.VendorId,
                VendorName = aa.VendorName,
                VendorPhone = aa.VendorPhone
            }).ToList();              
            return (itemList);
        }
    }
}
