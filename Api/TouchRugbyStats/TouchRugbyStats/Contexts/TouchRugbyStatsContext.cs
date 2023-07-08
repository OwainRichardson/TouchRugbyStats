using Microsoft.EntityFrameworkCore;
using TouchRugbyStats.Contexts.Entities;

namespace TouchRugbyStats.Contexts
{
    public class TouchRugbyStatsContext : DbContext
    {
        public TouchRugbyStatsContext(DbContextOptions<TouchRugbyStatsContext> options) : base(options)
        {

        }

        public DbSet<Match> Matches{ get; set; }
        public DbSet<Tournament> Tournaments { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<MatchEvent> MatchEvents { get; set; }
    }
}
