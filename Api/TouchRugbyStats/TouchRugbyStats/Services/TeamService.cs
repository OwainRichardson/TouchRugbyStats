using TouchRugbyStats.Data;
using TouchRugbyStats.GraqhQL.Team;

namespace TouchRugbyStats.Services.Services
{
    public class TeamService
    {
        public TeamInfo GetTeam(Guid teamId)
        {
            return TestData.Teams.Single(team => team.Id == teamId);
        }
    }
}
