using System.ComponentModel.DataAnnotations;

namespace TouchRugbyStats.Database.Contexts.Entities
{
    public class Match
    {
        [Key]
        public Guid Id { get; set; }
        public Guid TournamentId { get; set; }
        public Guid HomeTeamId { get; set; }
        public Guid AwayTeamId { get; set; }
        public DateTime StartTime { get; set; }
        public int? HomeScore { get; set; }
        public int? AwayScore { get; set; }
    }
}
