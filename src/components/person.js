import React, {Component} from 'react';
import axios from 'axios';
import Header from './header';
import _ from 'lodash';
import {withRouter} from 'react-router-dom'

import './person.css';
import Back from '../img/chevron-left.svg';

class User extends Component {

    state = {
        user: {}
    };

    renderPerson = () => {
        if (_.isEmpty(this.state.user)) {
            return (<p>Loading</p>);
        } else {
            return (
                <div className="person-wrapper">
                    <img src={this.state.user.avatar} alt="" className='person-avatar'/>
                    <div className="person-content col">
                        <p className="person-name">{this.state.user.name}</p>
                        <p className="person-location">{this.state.user.location}</p>
                    </div>
                </div>
            )
        }

    };

    componentWillMount() {
        axios.get(`https://api.github.com/users/${this.props.match.params.id}`).then((response) => {
            this.setState({
                user: {
                    name: response.data.name,
                    avatar: response.data.avatar_url,
                    location: response.data.location
                }
            })
        });
    }

    render() {
        return (
            <div className='user-page-wrapper page-wrapper'>
                <Header>
                    <div className="header-nav-back" onClick={() => this.props.history.goBack()}>
                        <img src={Back} alt=""/> Back
                    </div>
                    <h1 className="header-title">
                        Person
                    </h1>
                </Header>
                <main className="user-page-content-wrapper">
                    {this.renderPerson()}
                </main>

            </div>
        );
    }
}

export default withRouter(User);