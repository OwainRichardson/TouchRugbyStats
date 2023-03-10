import { useMatchContext } from '../../contexts/MatchContext';

const Statistics = () => {
    const { homeScore, awayScore, homeTeam, awayTeam, homeSets, awaySets, homeCompletedSets, 
                awayCompletedSets, homePenalties, awayPenalties } = useMatchContext();

    return (
        <div className="statistics-container">
            <div className='report-field'>
                <p className={`${homeTeam.toLowerCase()} report-value`}>{homeTeam}</p>
                <p className='report-label'></p>
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
            {/* <div className='report-field'>
                <p className='report-label'>History</p>
                <p className='report-value'>{history.map((hist, index) => {
                    return (
                        <span>{hist.action}</span>
                    );
                })}</p>
            </div> */}
        </div>
    );
};

export default Statistics;