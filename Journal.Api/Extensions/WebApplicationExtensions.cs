namespace Journal.Api.Extensions
{
    public static class WebApplicationExtensions
    {
        public static void OpenBrowserWhenReady(this WebApplication app)
        {
            app.Lifetime.ApplicationStarted.Register(() =>
            {
                var _ = app.Services.GetRequiredService<Launcher>().Start(app.Lifetime.ApplicationStopped);
            });
        }

        public static async void UseSeedData(this WebApplication app)
        {
            var scopedFactory = app.Services.GetRequiredService<IServiceScopeFactory>();
            var scope = scopedFactory.CreateAsyncScope();

            //var service = scope.ServiceProvider.GetRequiredService<SeedData>();
            //var registerConfig = scope.ServiceProvider.GetRequiredService<RegisterConfig>();

            //await service.InitializeAdminRole();
            //await service.InitializeUserRole();
            //await service.InitializeModeratorLocalRole();
            //await service.InitializeMemberLocalRole();

            //var adminAuthData = registerConfig.GetAdminDefaultAuthenticationData(app.Configuration);


            //await service.InitializeAdmin(adminAuthData.Nickname, adminAuthData.Password);

            await scope.DisposeAsync();
        }
    }
}
