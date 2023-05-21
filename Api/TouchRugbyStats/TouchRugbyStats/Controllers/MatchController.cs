using Microsoft.AspNetCore.Mvc;
using TouchRugbyStats.Models.Match;
using TouchRugbyStats.Models.Data;

namespace TouchRugbyStats.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MatchController : ControllerBase
    {
        [HttpGet]
        public MatchInfo Get()
        {
            return TestData.Matches.First();
        }
    }
}