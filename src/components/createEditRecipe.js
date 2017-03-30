import React, { Component } from 'react';

class CreateEditRecipe extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      operation: props.operation,
    };
  }

  handleCreate(e) {
    e.preventDefault();
    this.props.handleCreate(e.target.name.value, e.target.ingredients.value.split(','));
  }

  handleEdit(e) {
    e.preventDefault();
    const recipe = {
      id: this.props.id,
      name: e.target.name.value,
      ingredients: e.target.ingredients.value.split(',')
    };
    this.props.handleEdit(recipe);
    this.setState({ edit: true });
  }

  render() {
    const expand = this.props.expand ? ' expand' : '';
    const hidden = this.props.expand ? '' : ' hidden';
    const fadeIn = this.props.expand ? ' fade-in' : '';
    const ingredients = this.props.ingredients !== undefined ? this.props.ingredients : [];
    const handleSubmit = this.state.operation === 'add' ? this.handleCreate.bind(this) : this.handleEdit.bind(this);
    return (
      <div>
        <div className={"background-shadow" + fadeIn}>
        </div>
        {/*<div className={"collapsable" + expand}>*/}
        <div className={hidden}>
          {/*<div className={"CreateEditRecipe fixed-menu" + fadeIn}>*/}
          <div className="CreateEditRecipe fixed-menu">
            <h3 className="operation">{this.state.operation}</h3>
            <button className="x-btn btn" onClick={this.props.handleClose}><i className="fa fa-times" aria-hidden="true"></i></button>
            <hr />
            <form onSubmit={handleSubmit}>
              <label>Recipe</label>
              <input type="text" placeholder="Recipe Name" defaultValue={this.props.name} name="name"></input>
              <label>Ingredients</label>
              <textarea placeholder="Enter ingredients separated by commas" defaultValue={ingredients.join(',')} name="ingredients"></textarea>
              <hr />
              <button className="update-btn btn btn-primary" type="submit" value="Submit"><i className="fa fa-plus" aria-hidden="true"></i></button>
              <button className="close-btn btn btn-default" onClick={this.props.handleClose}>Close</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEditRecipe;