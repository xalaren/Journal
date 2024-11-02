using Journal.Core.Exceptions;

namespace Journal.Core.Entities
{
    public class Specialization
    {
        private string name = string.Empty;

        public Guid Id { get; set; }
        public string Name
        {
            get => name;
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ValidationException("Specialization name was empty");
                }
            }
        }
        
        public Color Color { get; set; } = null!;
    }
}
