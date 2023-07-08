using TouchRugbyStats.Services;

namespace TouchRugbyStats.GraqhQL
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
