import {useParams} from "react-router-dom";
import Itemlarge from "./largeItem";
import "./item.css";

const ItemFromQuery = ({allItems}) => {
    const {id} = useParams();
    const item = allItems.find((i) => i.id === parseInt(id));

    if (!item)
         return (
         <div>Item not found.</div>
        );
    return (
    <div>
    <Itemlarge item={item} />
    </div>
);
};

export default ItemFromQuery;