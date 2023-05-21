using TouchRugbyStats.Data;
using TouchRugbyStats.GraqhQL.Team;
using TouchRugbyStats.Services.Services;

namespace TouchRugbyStats.GraqhQL.Match
{
    public class MatchInfo
    {
        public Guid Id { get; set; }
        [GraphQLIgnore]
        public Guid HomeTeamId { get; set; }

        public TeamInfo GetHomeTeam([Parent] MatchInfo parent, [Service] TeamService teamService)
        {
            return teamService.GetTeam(parent.HomeTeamId);
        }

        [GraphQLIgnore]
        public Guid AwayTeamId { get; set; }
        public TeamInfo GetAwayTeam([Parent] MatchInfo parent, [Service] TeamService teamService)
        {
            return teamService.GetTeam(parent.AwayTeamId);
        }
    }
}
