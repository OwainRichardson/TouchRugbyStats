import { ICard } from "../../types/ICard";
import Card from "./Card";

const CardList = (props: any) => {
    return (
        <div className="card-wrapper">
            {
                props.cards.map((card: ICard) => {
                    return (
                        <Card card={card} />
                    );
                })
            }
        </div>
    );
};

export default CardList;