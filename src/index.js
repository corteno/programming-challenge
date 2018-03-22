import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import Home from './components/home';
import User from './components/person';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/:id' component={User} />
            <Route path='/' component={Home} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
