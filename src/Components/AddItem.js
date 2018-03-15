import React, { Component } from 'react';
import uuid from 'uuid';

export default class AddItem extends Component{
  constructor(){
    super();
    this.state = {
      newItems:[]
    }
  }
  handleSubmit(e){
    e.preventDefault();
    console.log("submitted this new item--->",this.refs.itemName.value);
    if(this.refs.itemName.value === ""){
      alert("Item can't be blank")
    }else{
      this.setState({newItems:{
          id: uuid.v4(),
          itemName: this.refs.itemName.value,
          itemPrice: this.refs.itemPrice.value,
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label >Item Name </label>
            <input ref="itemName" name="itemName" type="text"></input>
          </div>
          <div>
            <label >Item Price </label>
            <input ref="itemPrice" name="itemPrice" type="number" min="1" step="any"></input>
          </div>
          <div>
            <label >Quantity </label>
            <input ref="quantity" name="quantity" type="number"></input>
          </div>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}
