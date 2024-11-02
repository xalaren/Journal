using Journal.Core.Exceptions;

namespace Journal.Core.Entities
{
    public class Color
    {
        private string hexCode = string.Empty;

        public string HexCode
        {
            get => hexCode;
            set
            {
                if(string.IsNullOrWhiteSpace(value))
                {
                    throw new ValidationException("Color was empty");
                }

                hexCode = value;
            }
        }
    }
}
