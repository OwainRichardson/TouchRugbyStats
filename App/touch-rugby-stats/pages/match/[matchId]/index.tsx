import Timer from '../../../components/Timer';
import MatchContainer from '../../../components/MatchContainer';
import Teams from '../../../components/Teams';
import MatchContextProvider from '../../../context/MatchContext'; 
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

function Match() {
  const router = useRouter();
  const matchId = router.query.matchId;

  const getMatch = gql`
  query getMatch($matchId: ID!) {
      match(matchId: $matchId) {
          homeTeam {
            name
          },
          homeScore,
          awayTeam {
            name
          },
          awayScore
        }
      }`;

const {loading, error, data} = useQuery(getMatch, { variables: { matchId }})

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>

const props = {
  homeTeam: data.match.homeTeam.name,
  awayTeam: data.match.awayTeam.name,
  possession: 'home',
  teamInPossession: data.match.homeTeam.name.toLowerCase()
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