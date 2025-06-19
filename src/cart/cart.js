import { useContext } from 'react';
import { CartContext } from '../context/cart';
import './cart.css';
import { toast } from 'react-toastify';

export default function Cart() {
const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

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

  const notifyRemovedFromCart = (item) => toast.error(`${item.article} removed from cart!`, {
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

      const notifyCartCleared = (item) => toast.error(`All items removed from cart!`, {
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
        <div className="cart">
  <h1>Shopping Cart</h1>
  <div className="contents">
    {cartItems.map((item) => (
      <div key={item.id} className="cartitems">
        <div >
          <img src={`/images/${item.photo}.jpg`} alt={item.article} />
          <div>
            <h3>{item.article}</h3>
            <p>${item.price}</p>
          </div>
        </div>
        <div>
          <button onClick={() => {
              notifyRemovedFromCart(item)
              removeFromCart(item)
            }}
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button onClick={() => {
            notifyAddedToCart(item)
            addToCart(item)
            }}
          >
            +
          </button>
        </div>
      </div>
    ))}
  </div>
  {
    cartItems.length > 0 ? (
      <div>
    <h3>Total: ${getCartTotal()}</h3>
    <button
      onClick={() => {
        notifyCartCleared()
        clearCart()
      }}
    >
      Clear cart
    </button>
  </div>
    ) : (
      <h3>Your cart is empty.</h3>
    )
  }
</div>

    )
}