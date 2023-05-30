using System.ComponentModel.DataAnnotations;

namespace TouchRugbyStats.Contexts.Entities
{
    public class Team
    {
        [Key]
        public Guid Id { get; set; }
        public string TeamName { get; set; } = default!;
        public string BackgroundColour { get; set; } = default!;
        public string ForegroundColour { get; set; } = default!;
    }
}
