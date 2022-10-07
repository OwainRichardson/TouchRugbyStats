import './index.css';
import MatchContext from '../../Contexts/MatchContext';
import { useContext } from 'react';

const Teams = () => {
      const matchContext = useContext(MatchContext);
      console.log('match context', matchContext)

    return (
        <div className="team-container">
            <div className="team home wildcats"><span className="team-name in-possession">Wildcats</span></div>
            <div className="score home wildcats">
            </div>
            <div className="score away saxons">0</div>
            <div className="team away saxons"><span className="team-name">Saxons</span></div>
        </div>
    );
};

export default Teams;