const CardList = (props: any) => {
    return (
        <a href={props.card.link}>{props.card.label}</a>
    );
};

export default CardList;