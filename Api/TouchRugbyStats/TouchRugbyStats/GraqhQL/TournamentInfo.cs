using TouchRugbyStats.Services;

namespace TouchRugbyStats.GraqhQL
{
    public class TournamentInfo
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = default!; 
        public List<MatchInfo> GetMatches([Parent] TournamentInfo parent, [Service] MatchService matchService)
        {
            return matchService.GetMatches(parent.Id);
        }

        public MatchInfo GetMatch([GraphQLType(typeof(IdType))] Guid matchId, [Service] MatchService matchService)
        {
            return matchService.GetMatch(matchId);
        }
    }
}
