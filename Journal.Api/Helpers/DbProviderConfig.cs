using System.Runtime.CompilerServices;
using Microsoft.EntityFrameworkCore;

namespace Journal.Api.Helpers
{
    public static class DbProviderConfig
    {
        public static DbContextOptions GetSqliteOptions(this DbContextOptionsBuilder builder, IConfiguration config)
        {
            var connection = config.GetConnectionString("SqliteConnection");

            return builder
                .UseSqlite(connection, b => b.MigrationsAssembly("Journal.Api"))
                .Options;
        }
    }
}
