import Timer from '../../../../../components/Timer';
import MatchContainer from '../../../../../components/MatchContainer';
import Teams from '../../../../../components/Teams';
import MatchContextProvider, { useMatchContext } from '../../../../../context/MatchContext'; 
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

function Match() {
  const router = useRouter();
  const matchId = router.query.matchId;
  const tournamentId = router.query.tournamentId;

  const getMatch = gql`
  query getTournament($tournamentId: ID!, $matchId: ID!) {
    tournament(tournamentId: $tournamentId) {
      match(matchId: $matchId) {
          homeTeam {
            name,
            backgroundColour,
            foregroundColour
          },
          homeScore,
          awayTeam {
            name,
            backgroundColour,
            foregroundColour
          },
          awayScore
        }
      }
    }`;

const {loading, error, data} = useQuery(getMatch, { variables: { matchId, tournamentId }})

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>

const props = {
  possession: 'home',
  teamInPossession: data.tournament.match.homeTeam.name.toLowerCase(),
  homeTeam: data.tournament.match.homeTeam,
  awayTeam: data.tournament.match.awayTeam
};

  return (
    <div className="App">
      <header className="App-header">
        <MatchContextProvider {...props}>
          <Timer />
          <Teams />
          <MatchContainer />  
        </MatchContextProvider>
      </header>
    </div>
  );
}

export default Match;