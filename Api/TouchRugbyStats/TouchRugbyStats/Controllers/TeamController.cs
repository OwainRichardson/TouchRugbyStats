using Microsoft.AspNetCore.Mvc;
using TouchRugbyStats.Models.Team;
using TouchRugbyStats.Models.Data;

namespace TouchRugbyStats.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TeamController : ControllerBase
    {
        [HttpGet]
        public TeamInfo Index(Guid teamId)
        {
            return TestData.Teams.Single(team => team.Id == teamId);
        }
    }
}
