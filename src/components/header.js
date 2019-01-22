import React, { Component} from 'react';
import './header.css';

class Header extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-dark navbg">
                <div className="container">
                    <div className="row m-auto fs">
                    <i class="far fa-hand-point-up fa-2x text-white"></i>
                    <div className="ml-2 my-auto text-light" href="/">Multi-counter</div>
                    </div>

                </div>
            </nav>
        )
    }
}

export default Header;