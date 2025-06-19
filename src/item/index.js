import "./item.css";

const Item = ({item}) => {

    return (
        <div className="container">
            <a href={`/item/${item.id}`}>
            <img src={`/images/${item.photo}.jpg`} alt="Product" />
            </a>
            <h4>{item.article}</h4>
            <h5>${item.price}</h5>
        </div>
    );
}

export default Item;