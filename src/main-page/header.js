import { Component } from 'react';
import logo from './IF-logo2.png';

class Header extends Component {
    render() {
        return (
            <header className="top">
                <img src={logo} className='logo' alt="logo" />
                <div className="bar">
                <div className="navlinks">
                <a href="/">Shop</a>
                </div>
                <div className="navlinks right">
                    <a href="/cart">Cart</a></div>
                </div>

            </header>
        );
    }
}

export default Header;