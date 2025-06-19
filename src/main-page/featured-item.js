import Item from "../item";

const FeaturedItem = ({item}) => {
    if (item)
        return (
    <div>
        <Item item={item} />
    </div>
    );
    return <div>No new collections at this time.</div>
}

export default FeaturedItem;