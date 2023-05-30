using TouchRugbyStats.Contexts;
using TouchRugbyStats.GraqhQL;

namespace TouchRugbyStats.Services
{
    public class TournamentService
    {
        private readonly TouchRugbyStatsContext _touchRugbyStatsContext;

        public TournamentService(TouchRugbyStatsContext touchRugbyStatsContext)
        {
            _touchRugbyStatsContext = touchRugbyStatsContext;
        }

        public TournamentInfo GetTournament(Guid tournamentId)
        {
            return _touchRugbyStatsContext.Tournaments
                        .Select(tournament => new TournamentInfo
                        {
                            Id = tournamentId,
                            Name = tournament.Name
                        })
                        .Single(tourament => tourament.Id == tournamentId);
        }
    }
}
