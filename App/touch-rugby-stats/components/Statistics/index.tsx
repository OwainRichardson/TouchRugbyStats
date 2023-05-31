import { useMatchContext } from '../../context/MatchContext';
import Timeline from './timeline';

const Statistics = () => {
    const { homeScore, awayScore, homeTeam, awayTeam, homeSets, awaySets, homeCompletedSets, 
                awayCompletedSets, homePenalties, awayPenalties } = useMatchContext();

    return (
        <div>
            <div className="statistics-container">
                <div className='report-field'>
                    <p className={`${homeTeam.toLowerCase()} report-value`}>{homeTeam}</p>
                    <p className='report-label'>&nbsp;</p>
                    <p className={`${awayTeam.toLowerCase()} report-value`}>{awayTeam}</p>
                </div>
                <div className='report-field'>
                    <p className={`${homeTeam.toLowerCase()} report-value`}>{homeScore}</p>
                    <p className='report-label'>Score</p>
                    <p className={`${awayTeam.toLowerCase()} report-value`}>{awayScore}</p>
                </div>
                <div className='report-field'>
                    <p className={`${homeTeam.toLowerCase()} report-value`}>{homeSets}</p>
                    <p className='report-label'>Sets</p>
                    <p className={`${awayTeam.toLowerCase()} report-value`}>{awaySets}</p>
                </div>
                <div className='report-field'>
                    <p className={`${homeTeam.toLowerCase()} report-value`}>{homeCompletedSets}</p>
                    <p className='report-label'>Completed sets</p>
                    <p className={`${awayTeam.toLowerCase()} report-value`}>{awayCompletedSets}</p>
                </div>
                <div className='report-field'>
                    <p className={`${homeTeam.toLowerCase()} report-value`}>{homePenalties}</p>
                    <p className='report-label'>Penalties conceded</p>
                    <p className={`${awayTeam.toLowerCase()} report-value`}>{awayPenalties}</p>
                </div>
            </div>
            <Timeline />
        </div>
    );
};

export default Statistics;