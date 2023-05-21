using TouchRugbyStats.Models.Data;
using TouchRugbyStats.Models.Match;

namespace TouchRugbyStats.Models.GraqhQL
{
    public class Query
    {
        [UseFiltering]
        public MatchInfo Match() => TestData.MatchOne;
    }
}
