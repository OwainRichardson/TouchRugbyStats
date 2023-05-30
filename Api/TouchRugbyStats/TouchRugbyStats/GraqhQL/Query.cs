using TouchRugbyStats.Data;
using TouchRugbyStats.GraqhQL;
using TouchRugbyStats.Services;

namespace TouchRugbyStats.Models.GraqhQL
{
    public class Query
    {
        public MatchInfo GetMatch(Guid matchId, [Service] MatchService matchService)
        {
            return matchService.GetMatch(matchId);
        }

        public TournamentInfo GetTournament(Guid tournamentId, [Service] TournamentService tournamentService)
        {
            return tournamentService.GetTournament(tournamentId);
        }
    }
}
