using HotChocolate;
using TouchRugbyStats.Models.Data;
using TouchRugbyStats.Models.Team;

namespace TouchRugbyStats.Models.Match
{
    public class MatchInfo
    {
        public Guid Id { get; set; }
        [GraphQLIgnore]
        public Guid HomeTeamId { get; set; }

        public TeamInfo GetHomeTeam([Parent] MatchInfo parent)
        {
            return TestData.Teams.Single(team => team.Id == parent.HomeTeamId);
        }

        [GraphQLIgnore]
        public Guid AwayTeamId { get; set; }
        public TeamInfo GetAwayTeam([Parent] MatchInfo parent)
        {
            return TestData.Teams.Single(team => team.Id == parent.AwayTeamId);
        }
    }
}
