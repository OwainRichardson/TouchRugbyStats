﻿using TouchRugbyStats.Database.Contexts;
using TouchRugbyStats.GraqhQL.Models;

namespace TouchRugbyStats.GraphQL.Services
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
                            Id = tournament.Id,
                            Name = tournament.Name
                        })
                        .Single(tourament => tourament.Id == tournamentId);
        }

        internal List<TournamentInfo> GetTournaments()
        {
            return _touchRugbyStatsContext.Tournaments
                        .Select(tournament => new TournamentInfo
                        {
                            Id = tournament.Id,
                            Name = tournament.Name
                        })
                        .ToList();
        }
    }
}
