import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import CardList from "../../../components/CardList";
import { ICard } from "../../../types/ICard";

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

    function mapToCards(matches: any) : ICard[] {
        const cards = matches.map((match: any) => {
            return {
                label: `${match.homeTeam.name} vs ${match.awayTeam.name}`,
                link: `/tournament/${tournamentId}/match/${match.id}`
            };
        });

        return cards;
    }

      return (
        <>
            <p>{data.tournament.name}</p>
            <CardList cards={mapToCards(data.tournament.matches)} />
        </>
      );
    }
    
    export default Tournament;