import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from './logo';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import SearchBar from './SearchBar';

import './styles/App.css';
import { Button, Modal } from 'react-bootstrap'

class Details extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            data: [],
            movie: this.props.match.params.movie,
            show: false,
            videos: []
        }

    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


    componentDidMount = () => {
        const requestUrl = `https://api.themoviedb.org/3/movie/${this.state.movie}?api_key=7dcffa45eb6b1d3810ff8e19e8a9a0a5&language=es-ES`;
        fetch(requestUrl)
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(error => error);

        const videoUrl = `https://api.themoviedb.org/3/movie/${this.state.movie}/videos?api_key=7dcffa45eb6b1d3810ff8e19e8a9a0a5&language=en-US`;
        fetch(videoUrl)
            .then(response => response.json())
            .then(videos => this.setState({videos:videos.results}))
            .catch(error => error);
    }

    render  () {
        let video = ''
        const results = this.state.videos;        
        if (results) {
             results.map((title, i) => {
                if (i < 1) {
                   return video = title.key;
                } else {
                    return null;
                }
            })
        }
        return (
            <div className="Details">
                <div>
                    <header>
                        <Logo/>
                        <div id="search" className="Search">
                            <SearchBar
                            />
                        </div>
                        <UserProfile/>
                    </header>
                    <Navigation/>
                </div>
                <h1 className="title">{this.state.data.title}</h1>
                <div className={'Container'}>
                    <img src={`http://image.tmdb.org/t/p/original${this.state.data.backdrop_path}`} className={'poster'} alt={this.state.data.title} />
                    <div className={'Description'}>
                        <h4>{this.state.data.title} ({this.state.data.release_date})</h4>
                        <p>{this.state.data.overview}</p>
                    </div>
                    <div className={"end"}>
                        <Button bsStyle="danger" block onClick={this.handleShow}>Ver trailer</Button>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{this.state.data.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                        <Button bsStyle="primary" block disabled>Renta</Button>
                        <Button bsStyle="primary" block disabled>compra</Button>
                    </div>
                </div>
            </div>
        )
    };
}

Details.propTypes = {
    match: PropTypes.any
}

export default Details;