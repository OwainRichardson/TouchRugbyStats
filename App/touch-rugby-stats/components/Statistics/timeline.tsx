import { useMatchContext } from '../../context/MatchContext';

const Timeline = () => {
    const { homeTeam, awayTeam, matchLengthSeconds } = useMatchContext();

    function populateTimeline() {
        const homeTimeline = document.getElementById('home-timeline');
        const awayTimeline = document.getElementById('away-timeline');
    }

    return (
        <div className="timeline-container" id="timeline-container">
            <div className={`${homeTeam.toLowerCase()} timeline`} id="home-timeline"></div>
            <div className={`${awayTeam.toLowerCase()} timeline`} id="away-timeline"></div>
        </div>
    );
};

export default Timeline;