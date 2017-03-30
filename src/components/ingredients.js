import React, { Component } from 'react';
import CreateEditRecipe from './createEditRecipe';

class Ingredients extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: this.props.id,
      name: props.name,
      ingredients: props.ingredients,
      expand: false,
      edit: false
    };
  }

  editRecipe() {
    this.setState({edit: true});
  }

  deleteRecipe() {
    this.props.handleDelete(this.state.id);
  }

  closeCreateEditMenu() {
    this.setState({edit: false});
  }

  render() {
    const recipe = { id: this.state.id, name: this.state.name, ingredients: this.state.ingredients };
    const className = this.props.expand ? ' expand' : '';
    const ingredients = this.state.ingredients.map( (ingredient, index) => {
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
        <CreateEditRecipe {...recipe} expand={this.state.edit} operation="edit" handleEdit={this.props.handleEdit} handleClose={this.closeCreateEditMenu.bind(this)} />
      </div>
    );
  }
}

export default Ingredients;
