import React, { Component } from 'react';
import Ingredients from './ingredients';

class Recipe extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: this.props.id,
      name: props.name,
      ingredients: props.ingredients,
      expand: false
    };
  }

  expand(e) {
    const val = this.state.expand ? false : true;
    this.setState({expand: val});
  }

  render() {
    const className = this.state.expand ? '' : ' round-bottom';
    const recipe = { id: this.state.id, name: this.state.name, ingredients: this.state.ingredients };
    return (
      <div className="Recipe">
        <h4 className={"recipe-name round-top" + className}>
          <button onClick={this.expand.bind(this)}>{this.state.name}</button>
        </h4>
        <Ingredients {...recipe} expand={this.state.expand} handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete} />
      </div>
    );
  }
}

export default Recipe;
