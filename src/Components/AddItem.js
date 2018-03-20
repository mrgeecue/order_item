import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class AddItem extends Component{
  constructor(){
    super();
    this.state = {
      newItems:[]
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted this new item--->",this.refs.name.value);
    if(this.refs.name.value === ""){
      alert("Item can't be blank")
    }else{
      this.setState({newItems:{
          name: this.refs.name.value,
          price: this.refs.price.value,
          quantity: this.refs.quantity.value
        }},
        function(){
          console.log("we're setting the state-->", this.state);
          this.props.addItem(this.state.newItems)
        })
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label >Item Name </label>
            <input ref="name" name="name" type="text"></input>
          </div>
          <div>
            <label >Item Price </label>
            <input ref="price" name="price" type="number" min="1" step="any"></input>
          </div>
          <div>
            <label >Quantity </label>
            <input ref="quantity" name="quantity" type="number"></input>
          </div>
          <Button type="submit" bsStyle="primary" value="Add">Add</Button>
        </form>
      </div>
    )
  }
}

AddItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number
}
