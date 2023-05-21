using Microsoft.AspNetCore.Mvc;
using TouchRugbyStats.Data;
using TouchRugbyStats.GraqhQL.Match;

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