import React, { Component } from 'react';

class Ingredients extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ingredients: props.ingredients,
      expand: false
    };
  }

  render() {
    let className = this.props.expand ? ' expand' : '';
    let ingredients = this.state.ingredients.map( (ingredient, index) => {
      return <li key={index} className="ingredient">{ingredient}</li>
    });
    return (
      <div className={"collapsable" + className}>
        <div className="Ingredients round-bottom">
          <h4 className="ingredients-title">Ingredients</h4>
          <hr />
          <ul className="ingredient-list">
            {ingredients}
          </ul>
          <button className="del-btn btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
          <button className="edit-btn btn btn-info"><i className="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
      </div>
    );
  }
}

export default Ingredients;
