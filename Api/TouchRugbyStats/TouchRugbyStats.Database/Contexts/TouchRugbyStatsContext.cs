using Microsoft.EntityFrameworkCore;
using TouchRugbyStats.Database.Contexts.Entities;

namespace TouchRugbyStats.Database.Contexts
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
