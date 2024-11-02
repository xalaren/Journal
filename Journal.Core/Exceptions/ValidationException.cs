namespace Journal.Core.Exceptions
{
    public class ValidationException : JournalAppException
    {
        public ValidationException(string message) : base(message) { }
    }
}
