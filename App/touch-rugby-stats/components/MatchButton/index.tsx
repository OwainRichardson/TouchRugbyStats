import { useMatchContext } from '../../context/MatchContext';

const MatchButton = (params: any) => {

    const { homeTeam, awayTeam, possession } = useMatchContext();

    console.log(homeTeam);

    const buttonStyle = possession == 'home' ? { backgroundColor: homeTeam.backgroundColour, color: homeTeam.foregroundColour } : 
                                               { backgroundColor: awayTeam.backgroundColour, color: awayTeam.foregroundColour };

    return (
        <div className="match-button" onClick={params.clickFunction}>
            <div className={`match-button__content`} style={buttonStyle}>
                {params.buttonText}
            </div>
        </div>
    );
}

export default MatchButton;