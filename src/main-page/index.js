import {useContext, useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './main-page.css';
import Header from "./header.js";
import SearchResults from "../search-results/index.js";
import ItemFromQuery from "../item/ItemFromQuery.js";
import Itemfilter from "./item-filter.js";
import Banner from "./banner.js";
import { CartContext } from '../context/cart';
import Cart from "../cart/cart.js";
import Footer from "./footer.js";
import { ToastContainer, toast } from 'react-toastify';

function App(){
const [allItems, setAllItems] = useState([]);

useEffect(() => {
    const fetchItems = async () => {
        const rsp = await fetch("/items.json");
        const items = await rsp.json();
        setAllItems(items);
    };
    fetchItems();
}, []);

return (
<Router>
    <div className="page-container">
        <ToastContainer />
        <Header />
        <div className="page-body">
        <Routes>
            <Route path="/item/:id" element={
              <div>
              <ItemFromQuery allItems={allItems} />
          <h2>More Products</h2>
          <ItemList allItems={allItems} />
          </div>
          } />
            <Route path="/searchresults/:color" element={
              <div>
              <Itemfilter allItems={allItems} />
              <SearchResults allItems={allItems} />
              </div>
              } />
            <Route path="/" element={ 
              <div>
              <Banner />
              <Itemfilter allItems={allItems} />
              <ItemList allItems={allItems} />
              </div>
            } />
            <Route path="/cart" element={<Cart allItems={allItems} />} />
        </Routes>
        </div>
        <Footer />
    </div>
</Router>
);
}

function ItemList() {
  const { addToCart } = useContext(CartContext);
  const [allItems, setAllItems] = useState([]);

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

useEffect(() => {
    const fetchItems = async () => {
        const rsp = await fetch("/items.json");
        const items = await rsp.json();
        setAllItems(items);
    };
    fetchItems();
}, []);

  return (
    <div>
                    <div className='products'>
        {
          allItems.map(item => (
            <div key={item.id} className='item'>
              <a href={`/item/${item.id}`}>
              <img src={`/images/${item.photo}.jpg`} alt={item.article} />
              </a>
              <div className='mt-4'>
                <h4>{item.article}</h4>
                <h5>${item.price}</h5>
              </div>
              <div>
                <button onClick={() => {
                  addToCart(item)
                  notifyAddedToCart(item)
                }
              }>Add to cart</button>
              </div>
            </div>
          ))
        }
    </div>
</div>
   );
}

export default App;