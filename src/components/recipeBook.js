import React, { Component } from 'react';
import Recipe from './recipe';
import CreateEditRecipe from './createEditRecipe';
import RecipeStore from '../store/recipeStore';
import  * as RecipeActions from '../actions/recipeActions';

class RecipeBook extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      recipes: RecipeStore.getAll(),
      add: false,
    };
  }

  componentDidMount() {
    RecipeStore.on('change', () => {
      this.setState({add: false});
    })
  }

  addRecipe() {
    this.setState({add: true});
  }

  createRecipe(name, ingredients) {
    RecipeActions.createRecipe(name, ingredients);
    this.setState({add: false, recipes: RecipeStore.getAll()});
  }

  updateRecipe(recipe) {
    RecipeActions.updateRecipe(recipe);
    this.setState({add: false, recipes: RecipeStore.getAll()});
  }

  deleteRecipe(id) {
    RecipeActions.deleteRecipe(id);
    this.setState({add: false, recipes: RecipeStore.getAll()});
  }

  closeCreateEditMenu() {
    this.setState({add: false});
  }

  render() {
    const recipes = this.state.recipes.map((elem, index) => {
      const recipe = { id: elem.id, name: elem.name, ingredients: elem.ingredients };
      return <Recipe key={recipe.id} {...recipe} handleEdit={this.updateRecipe.bind(this)} handleDelete={this.deleteRecipe.bind(this)} />
    });
    return (
      <div className="RecipeBook">
        <div className="container">
          {recipes}
          <button className="add-btn btn btn-primary" onClick={this.addRecipe.bind(this)}>Add Recipe</button>
        </div>
        <CreateEditRecipe expand={this.state.add} operation="add" handleClose={this.closeCreateEditMenu.bind(this)} handleCreate={this.createRecipe.bind(this)} />
      </div>
    );
  }
}

export default RecipeBook;
