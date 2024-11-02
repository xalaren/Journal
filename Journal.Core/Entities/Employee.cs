using Journal.Core.Exceptions;

namespace Journal.Core.Entities
{
    public class Employee
    {
        private string lastname = string.Empty;

        public Guid Id { get; set; }
        public string Lastname
        {
            get => lastname;
            set
            {
                if(string.IsNullOrWhiteSpace(value))
                {
                    throw new ValidationException("Employee lastname was empty");
                }

                lastname = value;
            }
        }

        public string? Name { get; set; }
        public string? MiddleName { get; set; }

        public Specialization Specialization { get; set; } = null!;
        public ICollection<Duty> Duties { get; set; } = new List<Duty>();
    }
}
