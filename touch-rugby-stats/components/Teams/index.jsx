import './index.module.css';
import { useMatchContext } from '../../contexts/MatchContext';
import { useEffect } from 'react';
import styles from './index.module.css';

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
        <div className={styles['team-container']}>
            <div className={`${styles['team']} ${styles['home']} ${styles['wildcats']}`}><span className={`${styles['team-name']} ${styles['home']}`} id="team-name-home">{homeTeam}</span></div>
            <div className={`${styles['score']} ${styles['home']} ${styles['wildcats']} ${styles['home-score']}`}>{homeScore}</div>
            <div className={`${styles['score']} ${styles['away']} ${styles['saxons']}`}>{awayScore}</div>
            <div className={`${styles['team']} ${styles['away']} ${styles['saxons']}`}><span className={`${styles['team-name']} ${styles['away']}`} id="team-name-away">{awayTeam}</span></div>
        </div>
    );
};

export default Teams;