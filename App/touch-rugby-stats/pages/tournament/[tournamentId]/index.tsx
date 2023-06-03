import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";


function Tournament() {

    const router = useRouter();
    const tournamentId = router.query.tournamentId;

    const getMatches = gql`
        query getTournament($tournamentId: ID!) {
            tournament(tournamentId: $tournamentId) {
                name,
                matches {
                    id,
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
                    }
                    awayScore
                }
            }
        }`;

    const {loading, error, data} = useQuery(getMatches, { variables: { tournamentId }})

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

      return (
        <>
            <p>{data.tournament.name}</p>
                {
                    data.tournament.matches.map((match: any) => {
                        return (
                            <div key={match.id}>
                                <span style={{backgroundColor: match.homeTeam.backgroundColour, color: match.homeTeam.foregroundColour}}>
                                    {match.homeTeam.name}
                                </span>
                                {' '}{match.homeScore}
                                {' '}vs{' '}
                                {match.awayScore} {' '}
                                <span style={{backgroundColor: match.awayTeam.backgroundColour, color: match.awayTeam.foregroundColour}}>
                                    {match.awayTeam.name}
                                </span>
                                <a href={`/tournament/${tournamentId}/match/${match.id}`}>View</a>
                            </div>
                        )
                    })
                }
        </>
      );
    }
    
    export default Tournament;