using Journal.Api.Extensions;
using Journal.Api.Helpers;
using Journal.App.Data;

var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

builder.WebHost.UseUrls(configuration.Url());
builder.Services.AddCors(options => options.AddPolicy(
    "CorsPolicy",
    policyBuilder =>
    {
        policyBuilder.WithOrigins(configuration.ClientUrl())
            .AllowAnyHeader()
            .AllowAnyOrigin();
    }
));

builder.Services.AddSingleton<Launcher>();

builder.Services.AddDbContext<AppDbContext>(options => options.GetSqliteOptions(configuration));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.OpenBrowserWhenReady();
app.UseRouting();

//app.UseDefaultFiles();
//app.UseStaticFiles();

app.MapControllers();

app.Run();
