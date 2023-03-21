import { useMatchContext } from '../../contexts/MatchContext';
import { useEffect } from 'react';

const Teams = () => {
    const { homeScore, awayScore, possession, homeTeam, awayTeam } = useMatchContext();

    useEffect(() => {
        let homeTeamName = document.querySelector('#team-name-home');
        let awayTeamName = document.querySelector('#team-name-away');

        if (possession === 'home') {
            homeTeamName.classList.add('in-possession');
            awayTeamName.classList.remove('in-possession');
        } else {
            awayTeamName.classList.add('in-possession');
            homeTeamName.classList.remove('in-possession');
        }
    }, [possession]);

    return (
        <div className="team-container">
            <div className={`team home ${homeTeam.toLowerCase()}`}><span className="team-name home" id="team-name-home">{homeTeam}</span></div>
            <div className={`score home ${homeTeam.toLowerCase()} home-score`}>{homeScore}</div>
            <div className={`score away ${awayTeam.toLowerCase()} away-score`}>{awayScore}</div>
            <div className={`team away ${awayTeam.toLowerCase()}`}><span className="team-name away" id="team-name-away">{awayTeam}</span></div>
        </div>
    );
};

export default Teams;