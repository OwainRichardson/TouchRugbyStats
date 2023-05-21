using TouchRugbyStats.GraqhQL.Match;
using TouchRugbyStats.GraqhQL.Team;

namespace TouchRugbyStats.Data
{
    public static class TestData
    {
        public static Guid MatchId = Guid.NewGuid();
        public static Guid HomeTeamId = Guid.NewGuid();
        public static Guid AwayTeamId = Guid.NewGuid();

        public static MatchInfo MatchOne = new MatchInfo
        {
            Id = MatchId,
            HomeTeamId = HomeTeamId,
            AwayTeamId = AwayTeamId
        };

        public static TeamInfo HomeTeam = new TeamInfo
        {
            Id = HomeTeamId,
            Name = "Wildcats",
            BackgroundColour = "black",
            ForegroundColour = "orange"
        };

        public static TeamInfo AwayTeam = new TeamInfo
        {
            Id = AwayTeamId,
            Name = "Saxons",
            BackgroundColour = "dark blue",
            ForegroundColour = "light blue"
        };

        public static List<MatchInfo> Matches = new List<MatchInfo>
        { 
            MatchOne 
        };

        public static List<TeamInfo> Teams = new List<TeamInfo>
        {
            HomeTeam,
            AwayTeam
        };
    }
}
