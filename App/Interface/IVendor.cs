using App.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Interface
{
  public interface IVendor
    {
        bool SaveVendor(VendorViewModel vendorViewModel);
        List<VendorViewModel> GetAllItems();
    }
}
