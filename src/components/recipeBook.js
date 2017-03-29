import React, { Component } from 'react';
import Recipe from './recipe';
import CreateEditRecipe from './createEditRecipe';

class RecipeBook extends Component {
  constructor(props, context) {
    super(props, context);
    let test = JSON.parse(localStorage.getItem('RecipeBook'));
    if (test !== null) {
      this.state = test;
    } else {
      this.state = {
        add: false,
        recipes: [{
          name: 'Grilled Cheese',
          ingredients: ['bread', 'cheese', 'butter']
        }, {
          name: 'PB & J',
          ingredients: ['bread', 'peanutbutter', 'jelly']
        }]
      };
    }
    this.state.add = false;
  }

  componentDidMount() {
    localStorage.setItem('RecipeBook', JSON.stringify(this.state));
  }

  addRecipe(e) {
    this.setState({add: true});
  }

  createRecipe(name, ingredients) {
    this.state.recipes.push({
      name: name,
      ingredients: ingredients
    });
    this.setState({add: false});
    localStorage.setItem('RecipeBook', JSON.stringify(this.state));
  }

  updateRecipe(name, ingredients) {
    this.setState({recipes: this.state.recipes.map(function(recipe, index) {
        if(recipe.name === name) //BAD
          return {name: name, ingredients: ingredients }; 
        else
          return recipe;
      })
    });
    this.setState({add: false});
    localStorage.setItem('RecipeBook', JSON.stringify(this.state));
  }

  deleteRecipe(e) {
    localStorage.setItem('RecipeBook', JSON.stringify(this.state));
  }

  closeCreateEditMenu(e) {
    this.setState({add: false});
  }

  render() {
    let recipes = this.state.recipes.map((recipe, index) => {
      return <Recipe key={index} name={recipe.name} ingredients={recipe.ingredients} />
    });
    return (
      <div className="RecipeBook">
        <div className="container">
          {recipes}
          <button className="add-btn btn btn-primary" onClick={this.addRecipe.bind(this)}>Add Recipe</button>
        </div>
        <CreateEditRecipe expand={this.state.add} name={recipes[0].name} operation="add" ingredients={recipes[0].ingredients} handleClose={this.closeCreateEditMenu.bind(this)} handleCreate={this.createRecipe.bind(this)} handleEdit={this.updateRecipe.bind(this)} handleDelete={this.deleteRecipe.bind(this)} />
      </div>
    );
  }
}

export default RecipeBook;
