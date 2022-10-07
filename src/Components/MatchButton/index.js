import './index.css';

const MatchButton = (params) => {
    return (
        <div key={params.index} className="match-button" onClick={params.clickFunction}>
            <div className="match-button__content">
                {params.buttonText}
            </div>
        </div>
    );
}

export default MatchButton;