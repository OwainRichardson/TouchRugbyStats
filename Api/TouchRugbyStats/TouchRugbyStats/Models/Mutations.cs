using TouchRugbyStats.GraphQL.Services;

namespace TouchRugbyStats.GraqhQL.Models
{
    public class Mutations
    {
        public async Task<Event> AddMatchEvent(Event matchEvent, [Service] MatchService matchService)
        {
            await matchService.AddMatchEvent(matchEvent);

            return matchEvent;
        }
    }
}
