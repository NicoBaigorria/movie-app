import React, { Component } from 'react';
import { Title } from './Components/Title';
import { SearchForm } from './Components/SearchForm';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm/>
        </div>
      </div>
    );
  }
}

export default App;
