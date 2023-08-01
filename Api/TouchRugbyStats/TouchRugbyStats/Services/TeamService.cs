using TouchRugbyStats.Database.Contexts;
using TouchRugbyStats.GraqhQL.Models;

namespace TouchRugbyStats.GraphQL.Services
{
    public class TeamService
    {
        private readonly TouchRugbyStatsContext _touchRugbyStatsContext;
        public TeamService(TouchRugbyStatsContext touchRugbyStatsContext)
        {
            _touchRugbyStatsContext = touchRugbyStatsContext;
        }

        public TeamInfo GetTeam(Guid teamId)
        {
            return _touchRugbyStatsContext.Teams
                            .Select(team => new TeamInfo
                            {
                                Id = team.Id,
                                Name = team.TeamName,
                                BackgroundColour = team.BackgroundColour,
                                ForegroundColour = team.ForegroundColour
                            })
                            .Single(team => team.Id == teamId);
        }
    }
}
