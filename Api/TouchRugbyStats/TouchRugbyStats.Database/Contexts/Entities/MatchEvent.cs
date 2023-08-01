using System.ComponentModel.DataAnnotations;

namespace TouchRugbyStats.Database.Contexts.Entities
{
    public class MatchEvent
    {
        [Key]
        public Guid Id { get; set; }
        public Guid MatchId { get; set; }
        public Guid TeamId { get; set; }
        public string Event { get; set; }
        public int Timestamp { get; set; }
    }
}
