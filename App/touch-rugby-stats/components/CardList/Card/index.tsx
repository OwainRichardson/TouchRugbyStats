const CardList = (props: any) => {
    return (
        <div className="card">
            <div className="card-inner" onClick={event => window.location.href = props.card.link}>
                <div className="card-inner__image"></div>
                <div className="card-inner__label">{props.card.label}</div>
            </div>
        </div>
    );
};

export default CardList;