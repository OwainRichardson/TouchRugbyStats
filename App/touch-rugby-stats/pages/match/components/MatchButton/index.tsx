import { useMatchContext } from '../../context/MatchContext';

const MatchButton = (params: any) => {

    const { teamInPossession } = useMatchContext();

    return (
        <div className="match-button" onClick={params.clickFunction}>
            <div className={`match-button__content ${teamInPossession}`}>
                {params.buttonText}
            </div>
        </div>
    );
}

export default MatchButton;