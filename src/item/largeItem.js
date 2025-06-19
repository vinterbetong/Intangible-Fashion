import "./item.css";
import { useContext } from 'react';
import { CartContext } from '../context/cart';
import { toast } from 'react-toastify';

const Itemlarge = ({item}) => {
    const { addToCart } = useContext(CartContext);

    const notifyAddedToCart = (item) => toast.success(`${item.article} added to cart!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#fff',
      color: '#000',
    }
    });

    return (
        <div>
        <div className="fullview">
            <img src={`/images/${item.photo}.jpg`} alt="Product"/>
        </div>
        <div className="fullview">
            <h2>{item.article}</h2>
            <p>{item.description}</p>
            <h5>${item.price}</h5>
            <button onClick={() => {
            notifyAddedToCart(item)
              addToCart(item)
            }}>Add to cart</button>
            
        </div>
        </div>
    );
}

export default Itemlarge;