import React, { Component } from 'react';
import Recipe from './recipe';

class RecipeBook extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      recipes: [{
        name: 'Grilled Cheese',
        ingredients: ['bread', 'cheese', 'butter']
      }, {
        name: 'PB & J',
        ingredients: ['bread', 'peanutbutter', 'jelly']
      }]
    };
  }

  addRecipe() {
    return 0;
  }

  renderRecipe() {
    return 0;
  }

  render() {
    let recipes = this.state.recipes.map((recipe, index) => {
      return <Recipe key={index} name={recipe.name} ingredients={recipe.ingredients} />
    })
    return (
      <div className="RecipeBook container">
        {recipes}
        <button className="add-btn btn btn-primary">Add Recipe</button>
      </div>
    );
  }
}

export default RecipeBook;
