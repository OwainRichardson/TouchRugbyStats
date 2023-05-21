using TouchRugbyStats.Models.Data;
using TouchRugbyStats.Models.GraqhQL.Team;
using TouchRugbyStats.Services.Interfaces;

namespace TouchRugbyStats.Services.Services
{
    public class TeamService : ITeamService
    {
        public TeamInfo GetTeam(Guid teamId)
        {
            return TestData.Teams.Single(team => team.Id == teamId);
        }
    }
}
