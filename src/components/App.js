import React, { Component } from 'react';

import "./styles/App.css"

import MovieList from './ListCategory'
import Logo from './logo';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import SearchBar from './SearchBar';

export default class App extends Component {
    state = {
        searchTerm: "",
        searchUrl:  ""

    }

    handleKeyUp = ({key}) => {
        if(key === 'Enter' && this.state.searchTerm !== ""){
            let  searchUrl =  `search/multi?query=${this.state.searchTerm}&api_key=166624c030b91c943c397020f20525b4`;
            this.setState({
                searchUrl
            })
        }
    }

    handleChange = (event) => {
        const searchTerm = event.target.value
        this.setState({
            searchTerm
        })
    }

    render() {
        return (
         <div>
            <header>
                <Logo/>
                <div id="search" className="Search">
                <SearchBar
                        onChange={this.handleChange}
                        onKeyUp={this.handleKeyUp}
                        value={this.state.searchTerm}
                    />
                </div>
                <UserProfile/>
            </header>
             <Navigation/>
             <MovieList searchUrl={this.state.searchUrl}/>
         </div>
        );
    }
}

