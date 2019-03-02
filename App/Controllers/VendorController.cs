using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App.Interface;
using App.ViewModels;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
   
    public class VendorController : Controller
    {
        private readonly IVendor _vendor;
        public VendorController(IVendor vendor)
        {
            _vendor = vendor;
        }
        public IActionResult Index()
        {
            return View();
        }

        public object GetAllItems(DataSourceLoadOptions loadOptions)
        {
            var allItems = _vendor.GetAllItems();
            return DataSourceLoader.Load(allItems, loadOptions);
        }

        public IActionResult AddEditVendor()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddEditVendor( VendorViewModel vendorViewModel)
        {
            if (ModelState.IsValid)
            {
              var chk =   _vendor.SaveVendor(vendorViewModel);
                if (chk == true)
                {
                    return Json(new { Success = true, Message = "Succeed" });
                }
                return Json(new { Success = false, Message = "Failed" });
            }
            return Json(new { Success = false, Message = "Failed" });
        }
    }
}