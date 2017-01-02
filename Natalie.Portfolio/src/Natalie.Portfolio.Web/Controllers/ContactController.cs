using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Natalie.Portfolio.Web.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Natalie.Portfolio.Web.Controllers
{
    public class ContactController : Controller
    {
        [HttpPost]
        public IActionResult Index(ContactViewModel contactViewModel)
        {
            return Ok();
        }
    }
}
