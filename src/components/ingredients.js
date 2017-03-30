import React, { Component } from 'react';
import CreateEditRecipe from './createEditRecipe';

class Ingredients extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      expand: false,
      edit: false,
    };
  }

  editRecipe() {
    this.setState({edit: true});
  }

  submitEditRecipe(recipe) {
    this.props.handleEdit(recipe);
    this.setState({edit: false});
  }

  deleteRecipe() {
    this.props.handleDelete(this.props.id)
    this.setState({edit: false, expand: false});
  }

  closeCreateEditMenu() {
    this.setState({edit: false});
  }

  render() {
    const recipe = { id: this.props.id, name: this.props.name, ingredients: this.props.ingredients };
    const className = this.props.expand ? ' expand' : '';
    const ingredients = this.props.ingredients.map( (ingredient, index) => {
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
        <CreateEditRecipe {...recipe} expand={this.state.edit} operation="edit" handleEdit={this.submitEditRecipe.bind(this)} handleClose={this.closeCreateEditMenu.bind(this)} />
      </div>
    );
  }
}

export default Ingredients;
