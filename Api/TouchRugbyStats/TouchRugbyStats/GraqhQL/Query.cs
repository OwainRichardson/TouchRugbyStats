using TouchRugbyStats.Data;
using TouchRugbyStats.GraqhQL.Match;

namespace TouchRugbyStats.Models.GraqhQL
{
    public class Query
    {
        public MatchInfo Match() => TestData.MatchOne;
    }
}
