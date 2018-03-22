import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import _ from 'lodash';

import Header from './header';

import './home.css';

class App extends Component {

    renderList = (users) => {
        return _.map(users, user => {
            return (
                <li className="list-item" key={user}>
                    <Link to={`/${user}`}>
                        {user}
                    </Link>
                </li>
            )
        })
    };


    render() {
        return (
            <div className="home-wrapper page-wrapper">
                <Header>
                    <h1 className="header-title">Home</h1>
                </Header>
                <main className="page-content-wrapper col">
                    <h2 className="page-title">
                        Top 5 GitHub Users
                    </h2>
                    <p className="tooltip">
                        Tap the username to see more information
                    </p>
                    <ul className="user-list list">
                        {this.renderList(["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"])}
                    </ul>
                </main>
            </div>
        );
    }
}

export default App;
