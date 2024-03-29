using Microsoft.EntityFrameworkCore;
using TouchRugbyStats.Database.Contexts;
using TouchRugbyStats.GraphQL.Services;
using TouchRugbyStats.GraqhQL;
using TouchRugbyStats.GraqhQL.Models;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<TouchRugbyStatsContext>(options => options.UseSqlServer("Server=.;Database=TouchRugbyStats;User Id=sa;Password=Megame29!;TrustServerCertificate=True;"));
builder.Services.AddScoped<TeamService>();
builder.Services.AddScoped<MatchService>();
builder.Services.AddScoped<TournamentService>();

builder.Services.AddSingleton<HttpClient>();

builder.Services.AddGraphQLServer()
            .AddQueryType<Query>()
            .AddMutationType<Mutations>()
            .AddFiltering();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.AllowAnyHeader()
                                    .AllowAnyMethod()
                                    .AllowAnyOrigin();
                      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.MapGraphQL();
app.UseCors(MyAllowSpecificOrigins);

app.Run();
