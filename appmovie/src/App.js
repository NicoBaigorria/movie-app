import React, { Component } from 'react';
import { Title } from './Components/Title';
import { SearchForm } from './Components/SearchForm';
import { MovieList } from './Components/MovieList';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state = { usedSearch: false, results: [] }

  _handleResults = (results) => {
    this.setState({results, usedSearch: true })
  }

  _renderResults () {
    return this.state.results.length === 0
      ? <p> Perdon! Resultado no encontrado! </p>
      : <MovieList movies={this.state.results} />
  }

  render() {
    return (
      <div className="App">
        <Title>Buscar Pelicula</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch
          ? this._renderResults()
          : <small> Usa el formulario para buscar una pelicula </small>
        }
      </div>
    );
  }
}

export default App;
