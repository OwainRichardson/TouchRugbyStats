namespace TouchRugbyStats.GraqhQL
{
    public class TeamInfo
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = default!;
        public string BackgroundColour { get; set; } = default!;
        public string ForegroundColour { get; set; } = default!;
    }
}
