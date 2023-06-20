import { useQuery, gql } from "@apollo/client";
import { ICard } from "../../types/ICard";
import CardList from "../../components/CardList";

function Tournaments() {

    const getTournaments = gql`
    query GetTournaments {
        tournaments {
            id,
            name,
          }
    }`;

    const {loading, error, data} = useQuery(getTournaments)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

    function mapToCards(tournaments: any) : ICard[] {
        const cards = tournaments.map((tournament: any) => {
            return {
                label: tournament.name,
                link: `/tournament/${tournament.id}`
            };
        });

        return cards;
    }

    return (
            <>
                <h2>Tournaments</h2>
                <CardList cards={mapToCards(data.tournaments)} />
            </>
        );
    }
    
    export default Tournaments;