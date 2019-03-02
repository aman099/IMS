using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App.Models;
using App.Services;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
    public class ItemsController : Controller
    {
        public IItemService _itemService;
        
        public ItemsController( IItemService itemService)
        {
           
            _itemService = itemService;
        }

        public IActionResult Index()
        {
            return View();
        }
        
        //public object GetAllItems(DataSourceLoadOptions loadOptions)
        //{
        //    var allItems = _itemService.GetAllItems();
        //    return DataSourceLoader.Load(allItems, loadOptions);
        //}

        public IActionResult AddEditItem(int id =0 )
        {
            return View();
        }


        //[HttpPost]
        //public JsonResult AddEditItem(Items items)
        //{
        //    try
        //    {
        //        Items itemsstore = new Items();
               
        //        if (ModelState.IsValid)
        //        {
        //            var result = _itemService.addItems(items);  
        //            if (result == 1)
        //            {
        //                return Json(new { result = "1", message = "Success." });
        //            }
        //        }
        //    }
        //    catch {
        //        Exception ex;
        //    }
        //    return Json(new { result = "0", message = "Failed." });
        //}
    }
}