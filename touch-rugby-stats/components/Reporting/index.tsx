import { useMatchContext } from '../../contexts/MatchContext';
import './index.module.css';

const Reporting = () => {
    const { homeScore, awayScore, homeTeam, awayTeam, homeSets, awaySets, homeCompletedSets, 
                awayCompletedSets } = useMatchContext();

    return (
        <div>
            <div className='report-field'>
                <p className='report-label'>Home score</p>
                <p className='report-value'>{homeScore}</p>
            </div>
            <div className='report-field'>
                <p className='report-label'>Away score</p>
                <p className='report-value'>{awayScore}</p>
            </div>
            <div className='report-field'>
                <p className='report-label'>Home sets</p>
                <p className='report-value'>{homeSets}</p>
            </div>
            <div className='report-field'>
                <p className='report-label'>Away sets</p>
                <p className='report-value'>{awaySets}</p>
            </div>
            <div className='report-field'>
                <p className='report-label'>Home completed sets</p>
                <p className='report-value'>{homeCompletedSets}</p>
            </div>
            <div className='report-field'>
                <p className='report-label'>Away completed sets</p>
                <p className='report-value'>{awayCompletedSets}</p>
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

export default Reporting;