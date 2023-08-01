using Microsoft.EntityFrameworkCore.Migrations;
using TouchRugbyStats.Database.Contexts.Entities;

#nullable disable

namespace TouchRugbyStats.Database.Migrations
{
    /// <inheritdoc />
    public partial class SeedInitialData : Migration
    {
        static Team wildcats = new Team { Id = Guid.NewGuid(), BackgroundColour = "black", ForegroundColour = "orange", TeamName = "Wildcats" };
        static Team saxons = new Team { Id = Guid.NewGuid(), BackgroundColour = "darkblue", ForegroundColour = "aqua", TeamName = "Saxons" };
        static Team taipans = new Team { Id = Guid.NewGuid(), BackgroundColour = "red", ForegroundColour = "black", TeamName = "Taipans" };
        static Team sharks = new Team { Id = Guid.NewGuid(), BackgroundColour = "aqua", ForegroundColour = "darkblue", TeamName = "Sharks" };

        static Tournament nationals = new Tournament { Id = Guid.NewGuid(), Name = "Nationals 2023" };

        static Match match1 = new Match { Id = Guid.NewGuid(), HomeTeamId = wildcats.Id, AwayTeamId = saxons.Id, StartTime = DateTime.Now, TournamentId = nationals.Id };
        static Match match2 = new Match { Id = Guid.NewGuid(), HomeTeamId = taipans.Id, AwayTeamId = sharks.Id, StartTime = DateTime.Now.AddMinutes(30), TournamentId = nationals.Id };

        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql($@"
                Insert Into Teams
                    (Id, TeamName, BackgroundColour, ForegroundColour)
                Values
                    ('{wildcats.Id}', '{wildcats.TeamName}', '{wildcats.BackgroundColour}', '{wildcats.ForegroundColour}'),
                    ('{saxons.Id}', '{saxons.TeamName}', '{saxons.BackgroundColour}', '{saxons.ForegroundColour}'),
                    ('{taipans.Id}', '{taipans.TeamName}', '{taipans.BackgroundColour}', '{taipans.ForegroundColour}'),
                    ('{sharks.Id}', '{sharks.TeamName}', '{sharks.BackgroundColour}', '{sharks.ForegroundColour}')
            ");

            migrationBuilder.Sql($@"
                Insert Into Tournaments
                    (Id, Name)
                Values
                    ('{nationals.Id}', '{nationals.Name}')
            ");

            migrationBuilder.Sql($@"
                Insert Into Matches
                    (Id, TournamentId, HomeTeamId, AwayTeamId, StartTime)
                Values
                    ('{match1.Id}', '{match1.TournamentId}', '{match1.HomeTeamId}', '{match1.AwayTeamId}', '{match1.StartTime}'),
                    ('{match2.Id}', '{match2.TournamentId}', '{match2.HomeTeamId}', '{match2.AwayTeamId}', '{match2.StartTime}')
            ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
