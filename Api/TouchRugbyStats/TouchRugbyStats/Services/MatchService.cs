﻿using TouchRugbyStats.Database.Contexts;
using TouchRugbyStats.Database.Contexts.Entities;
using TouchRugbyStats.GraqhQL.Models;

namespace TouchRugbyStats.GraphQL.Services
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

        public async Task AddMatchEvent(Event matchEvent)
        {
            MatchInfo match = GetMatch(matchEvent.MatchId);

            Guid team;
            if (matchEvent.Team == "home")
            {
                team = match.HomeTeamId;
            }
            else
            {
                team = match.AwayTeamId;
            }    

            await _touchRugbyStatsContext.MatchEvents.AddAsync(new MatchEvent
            {
                Id = Guid.NewGuid(),
                Event = matchEvent.EventName,
                MatchId = matchEvent.MatchId,
                TeamId = team,
                Timestamp = matchEvent.Timestamp
            });

            await _touchRugbyStatsContext.SaveChangesAsync();
        }
    }
}
