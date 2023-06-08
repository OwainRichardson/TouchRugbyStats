import { ICard } from "../../types/ICard";
import Card from "./Card";

const CardList = (props: any) => {
    return (
        props.cards.map((card: ICard) => {
            return (
                <Card card={card} />
            );
        })
    );
};

export default CardList;