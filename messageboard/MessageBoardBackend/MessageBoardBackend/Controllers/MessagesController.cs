using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageBoardBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        static List<Models.Message> messagges = new
            List<Models.Message>();
        public IEnumerable <Models.Message> Get()
        {
            return new Models.Message[]
            {
                new Models.Message
                {
                    Owner = "John",
                    Text = "Hey"
                },
                new Models.Message
                {
                    Owner = "Bob",
                    Text = "Hi"
                }

            };
        }

        [HttpPost]
        public void Post([FromBody] Models.Message message)
        {

        }

    }
}