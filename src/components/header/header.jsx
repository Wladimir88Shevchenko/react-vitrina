import React from 'react';
import Style from './header.module.css'

const Header = () => {

    return (
        <header className={Style.headerWrapper}>
            <nav>
                <div className={`nav-wrapper ${Style.navWrapper}  cyan darken-3`}>
                    <a href="!#" className="brand-logo">Good Shop</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://github.com/Wladimir88Shevchenko/">Github</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;