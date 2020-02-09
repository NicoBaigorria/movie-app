import React, { Component } from 'react'

const API_KEY = '4287ad07'

export class SearchForm extends Component {

    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state
        
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${inputMovie}`)
        .then(res => res.json())
        .then(results => {
            console.log(results)
        })
    }   
    
    render() {
        return (
            <form onSubmit={this._handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input className="input"
                    onChange={this._handleChange}
                    type="text" 
                    placeholder="Movie to search">
                    </input>
                </div>
                <div className="control">
                    <button className="button is-info">
                        Search
                    </button>
                </div>
            </div>
            </form>
                )
            }
}