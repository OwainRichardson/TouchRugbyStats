import { useMatchContext } from '../../context/MatchContext';
import { useEffect } from 'react';

const Teams = () => {
    const { homeScore, awayScore, possession, homeTeam, awayTeam } = useMatchContext();

    useEffect(() => {
        const homeTeamName = document.querySelector('#team-name-home');
        const awayTeamName = document.querySelector('#team-name-away');

        if (possession === 'home') {
            homeTeamName.classList.add('in-possession');
            awayTeamName.classList.remove('in-possession');
        } else {
            awayTeamName.classList.add('in-possession');
            homeTeamName.classList.remove('in-possession');
        }
    }, [possession]);

    const homeTeamStyle = {
        backgroundColor: homeTeam?.backgroundColour,
        color: homeTeam?.foregroundColour,
    }
    const awayTeamStyle = {
        backgroundColor: awayTeam?.backgroundColour,
        color: awayTeam?.foregroundColour,
    }

    console.log(homeTeamStyle);

    return (
        <div className="team-container">
            <div className={`team home`} style={ homeTeamStyle }>
                <span className="team-name home" id="team-name-home">{homeTeam.name}</span>
            </div>
            <div className={`score home home-score`} style={ homeTeamStyle }>{homeScore}</div>
            <div className={`score away away-score`} style={ awayTeamStyle }>{awayScore}</div>
            <div className={`team away`} style={ awayTeamStyle }>
                <span className="team-name away" id="team-name-away">{awayTeam.name}</span>
            </div>
        </div>
    );
};

export default Teams;