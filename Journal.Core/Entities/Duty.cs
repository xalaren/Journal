namespace Journal.Core.Entities
{
    public class Duty
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public decimal Cost { get; set; }

        public Employee Employee { get; set; } = null!;
    }
}
