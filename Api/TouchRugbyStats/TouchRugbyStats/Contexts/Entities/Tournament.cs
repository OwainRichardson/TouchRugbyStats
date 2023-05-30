using System.ComponentModel.DataAnnotations;

namespace TouchRugbyStats.Contexts.Entities
{
    public class Tournament
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; } = default!;
    }
}
