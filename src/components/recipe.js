import React, { Component } from 'react';
import Ingredients from './ingredients';

class Recipe extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      expand: false
    };
  }

  expand(e) {
    const val = this.state.expand ? false : true;
    this.setState({expand: val});
  }

  render() {
    const className = this.state.expand ? '' : ' round-bottom';
    const recipe = { id: this.props.id, name: this.props.name, ingredients: this.props.ingredients };
    return (
      <div className="Recipe">
        <h4 className={"recipe-name round-top" + className}>
          <button onClick={this.expand.bind(this)}>{this.props.name}</button>
        </h4>
        <Ingredients {...recipe} expand={this.state.expand} handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete} />
      </div>
    );
  }
}

export default Recipe;
