import './index.css';
import { useMatchContext } from '../../Contexts/MatchContext';
import { useEffect } from 'react';

const Teams = () => {
    const { homeScore, awayScore, possession, homeSets, awaySets } = useMatchContext();

    useEffect(() => {
        let homeTeamName = document.querySelector('.team-name.home');
        let awayTeamName = document.querySelector('.team-name.away');

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
            <div className="team home wildcats"><span className="team-name home">Wildcats</span> ({homeSets})</div>
            <div className="score home wildcats">{homeScore}</div>
            <div className="score away saxons">{awayScore}</div>
            <div className="team away saxons"><span className="team-name away">Saxons ({awaySets})</span></div>
        </div>
    );
};

export default Teams;