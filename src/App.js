import React, { Component } from 'react';
import './components/styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/App';
import Details from './components/Details';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Route exact path='/' component={Home} />
                    <Route path='/details/:movie' component={Details} />
                </div>
            </Router>

        );
    }
}

export default App;
