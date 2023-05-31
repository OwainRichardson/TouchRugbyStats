using TouchRugbyStats.GraqhQL;
using TouchRugbyStats.Services;

namespace TouchRugbyStats.Models.GraqhQL
{
    public class Query
    {
        public MatchInfo GetMatch([GraphQLType(typeof(IdType))] Guid matchId, [Service] MatchService matchService)
        {
            return matchService.GetMatch(matchId);
        }

        public TournamentInfo GetTournament([GraphQLType(typeof(IdType))] Guid tournamentId, [Service] TournamentService tournamentService)
        {
            return tournamentService.GetTournament(tournamentId);
        }

        public List<TournamentInfo> GetTournaments([Service] TournamentService tournamentService)
        {
            return tournamentService.GetTournaments();
        }
    }
}
