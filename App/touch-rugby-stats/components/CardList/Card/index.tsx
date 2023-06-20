const CardList = (props: any) => {
    return (
        <div className="card" onClick={event => window.location.href = props.card.link}>
            <div className="card__image"></div>
            <div className="card__label">{props.card.label}</div>
        </div>
    );
};

export default CardList;