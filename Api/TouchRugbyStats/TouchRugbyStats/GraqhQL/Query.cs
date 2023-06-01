using TouchRugbyStats.GraqhQL;
using TouchRugbyStats.Services;

namespace TouchRugbyStats.Models.GraqhQL
{
    public class Query
    {
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
