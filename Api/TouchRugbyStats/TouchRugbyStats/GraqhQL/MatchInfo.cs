using TouchRugbyStats.Services.Services;

namespace TouchRugbyStats.GraqhQL
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

        public Guid TournamentId { get; set; }
        public DateTime StartTime { get; set; }
        public int? HomeScore { get; set; }
        public int? AwayScore { get; set; }
    }
}
