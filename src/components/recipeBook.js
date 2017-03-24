import React, { Component } from 'react';
import Recipe from './recipe';

class RecipeBook extends Component {
  render() {
    return (
      <div className="RecipeBook">
        <Recipe />
      </div>
    );
  }
}

export default RecipeBook;
