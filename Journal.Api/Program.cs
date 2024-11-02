using Journal.Api.Extensions;

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

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
