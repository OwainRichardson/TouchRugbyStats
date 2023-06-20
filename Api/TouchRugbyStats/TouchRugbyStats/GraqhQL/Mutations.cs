using System.Reflection.Metadata.Ecma335;
using TouchRugbyStats.Contexts.Entities;

namespace TouchRugbyStats.GraqhQL
{
    public class Mutations
    {
        //ToDo: remove entity from mutation and only pass through what we would have in FE
        public Task<MatchEvent> AddMatchEvent(MatchEvent matchEvent)
        {
            return Task.FromResult(matchEvent);
        }

        public Task<bool> UpdateScore(MatchEvent matchEvent)
        {
            return Task.FromResult(true);
        }
    }
}
