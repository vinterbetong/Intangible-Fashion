import './search.css';
import { useContext } from 'react';
import { CartContext } from '../context/cart';
import { toast } from 'react-toastify';

const SearchResultsRow = ({item}) => {
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
        <div className="items">
            <div>
                <div>
                <img src={`/images/${item.photo}.jpg`} alt="Product"/>
                </div>
            <h4>{item.article}</h4>
            <h5>${item.price}</h5>
            <button onClick={() => {
            notifyAddedToCart(item)
              addToCart(item)
            }}>Add to cart</button>
        </div>
        </div>
    );
};
export default SearchResultsRow;