import React, { Component } from 'react';
import Ingredients from './ingredients';

class Recipe extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: props.name,
      ingredients: props.ingredients,
      expand: false
    };
  }

  expand(e) {
    let val = this.state.expand ? false : true;
    this.setState({expand: val});
  }

  render() {
    let className = this.state.expand ? '' : ' round-bottom';
    return (
      <div className="Recipe">
        <h4 className={"recipe-name round-top" + className}>
          <button onClick={this.expand.bind(this)}>{this.state.name}</button>
        </h4>
        <Ingredients name={this.state.name} ingredients={this.state.ingredients} expand={this.state.expand} />
      </div>
    );
  }
}

export default Recipe;
