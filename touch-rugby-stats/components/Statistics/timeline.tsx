import { match } from 'assert';
import { useEffect } from 'react';
import { useMatchContext } from '../../contexts/MatchContext';

const Timeline = () => {
    const { homeTeam, awayTeam, matchEvents, matchLengthSeconds } = useMatchContext();

    function populateTimeline() {
        const homeTimeline = document.getElementById('home-timeline');
        const awayTimeline = document.getElementById('away-timeline');

        matchEvents.map((matchEvent) => {

            const eventMarker = document.createElement('span');
            eventMarker.classList.add(matchEvent.possession);
            eventMarker.style.left = `${(matchEvent.timestamp * 100) / matchLengthSeconds}%`;

            if (matchEvent.possession == 'home') {
                eventMarker.classList.add(homeTeam.toLowerCase());
                homeTimeline?.appendChild(eventMarker);
            } else {
                eventMarker.classList.add(awayTeam.toLowerCase());
                awayTimeline?.appendChild(eventMarker);
            }

        })
    }

     useEffect(() => {
         populateTimeline();
     }, [matchEvents]);

    return (
        <div className="timeline-container" id="timeline-container">
            <div className={`${homeTeam.toLowerCase()} timeline`} id="home-timeline"></div>
            <div className={`${awayTeam.toLowerCase()} timeline`} id="away-timeline"></div>
        </div>
    );
};

export default Timeline;