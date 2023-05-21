using TouchRugbyStats.Data;
using TouchRugbyStats.GraqhQL.Match;

namespace TouchRugbyStats.Models.GraqhQL
{
    public class Query
    {
        [UseFiltering]
        public MatchInfo Match() => TestData.MatchOne;
    }
}
