import React, { Component } from 'react';
import RecipeBook from './components/recipeBook';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Recipe App</h2>
        </div>
        <RecipeBook />
      </div>
    );
  }
}

export default App;
