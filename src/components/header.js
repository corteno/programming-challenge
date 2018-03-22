import React, {Component} from 'react';
import './header.css'

class Header extends Component {
    
    render() {
        return (
            <header className='header-wrapper'>
                {this.props.children}
            </header>
        );
    }
}

export default Header;