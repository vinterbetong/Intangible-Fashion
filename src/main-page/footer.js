import { Component } from 'react';
import logo from './IF-logo-white.png';

class Footer extends Component {
render() {
        return (
            <div className="footer">
                <img src={logo} className='logo'/>
                <table>
                    <tr>
                    <th>Business Information</th>
                    <th>Help</th>
                    </tr>
                    <tr>
                        <td>News</td>
                        <td>Contact us</td>
                    </tr>
                    <tr>
                        <td>Careers</td>
                        <td>My Account</td>
                    </tr>
                    <tr><td>About Intangible Fashion</td>
                    <tr><td>Customer Service</td></tr></tr>
                </table>
            </div>
        );
    }
}

export default Footer;