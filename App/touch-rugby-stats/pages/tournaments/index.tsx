import { useQuery, gql } from "@apollo/client";

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

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <div>
                <div>Tournaments</div>
                    {
                        data.tournaments.map((tournament: any, _: any) => {
                            return (
                                <>
                                    <a href={`/tournament/${tournament.id}`} key={tournament.id}>{tournament.name}</a>
                                </>
                            )
                        })
                    }
            </div>
        </div>
    );
    }
    
    export default Tournaments;