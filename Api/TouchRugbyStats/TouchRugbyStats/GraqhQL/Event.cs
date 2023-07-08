namespace TouchRugbyStats.GraqhQL
{
    public class Event
    {
        [GraphQLType(typeof(IdType))]
        public Guid MatchId { get; set; }
        public string Team { get; set; }
        public string EventName { get; set; }
        public int Timestamp { get; set; }
    }
}
