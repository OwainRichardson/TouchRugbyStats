﻿using TouchRugbyStats.Contexts;
using TouchRugbyStats.Contexts.Entities;
using TouchRugbyStats.GraqhQL;

namespace TouchRugbyStats.Services
{
    public class MatchService
    {
        private readonly TouchRugbyStatsContext _touchRugbyStatsContext;
        public MatchService(TouchRugbyStatsContext touchRugbyStatsContext)
        {
            _touchRugbyStatsContext = touchRugbyStatsContext;
        }

        public MatchInfo GetMatch(Guid matchId)
        {
            return _touchRugbyStatsContext.Matches
                            .Select(match => new MatchInfo
                            {
                                Id = match.Id,
                                AwayTeamId = match.AwayTeamId,
                                HomeTeamId = match.HomeTeamId,
                                TournamentId = match.TournamentId,
                                StartTime = match.StartTime,
                                HomeScore = match.HomeScore,
                                AwayScore = match.AwayScore
                            })
                            .Single(match => match.Id == matchId);
        }

        public List<MatchInfo> GetMatches(Guid tournamentId)
        {
            return _touchRugbyStatsContext.Matches
                        .Where(match => match.TournamentId == tournamentId)
                        .Select(match => new MatchInfo
                        {
                            Id = match.Id,
                            AwayTeamId = match.AwayTeamId,
                            HomeTeamId = match.HomeTeamId,
                            TournamentId = match.TournamentId,
                            StartTime = match.StartTime,
                            HomeScore = match.HomeScore,
                            AwayScore = match.AwayScore
                        })
                        .ToList();
        }
    }
}
