import React, { Component } from 'react';
import CreateEditRecipe from './createEditRecipe';

class Ingredients extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      recipeKey: props.recipeKey,
      name: props.name,
      ingredients: props.ingredients,
      expand: false,
      edit: false
    };
  }

  editRecipe(e) {
    this.setState({edit: true});
  }

  deleteRecipe(e) {
    //
  }

  closeCreateEditMenu(e) {
    this.setState({edit: false});
  }

  render() {
    let className = this.props.expand ? ' expand' : '';
    let ingredients = this.state.ingredients.map( (ingredient, index) => {
      return <li key={index} className="ingredient">{ingredient}</li>
    });
    return (
      <div>
        <div className={"collapsable" + className}>
          <div className="Ingredients round-bottom">
            <h4 className="ingredients-title">Ingredients</h4>
            <hr />
            <ul className="ingredient-list">
              {ingredients}
            </ul>
            <button className="del-btn btn btn-danger" onClick={this.deleteRecipe.bind(this)}><i className="fa fa-trash" aria-hidden="true"></i></button>
            <button className="edit-btn btn btn-info" onClick={this.editRecipe.bind(this)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
          </div>
        </div>
        <CreateEditRecipe recipeKey={this.state.recipeKey} expand={this.state.edit} name={this.state.name} operation="edit" ingredients={this.state.ingredients} handleClose={this.closeCreateEditMenu.bind(this)} />
      </div>
    );
  }
}

export default Ingredients;
