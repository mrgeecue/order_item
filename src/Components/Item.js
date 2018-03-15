import React, { Component } from 'react';

export default class Item extends Component{
  onDelete(id){
    this.props.deleteItem(id);
  }

  render(){
    console.log("this was passed through--->",this.props.item);
    console.log(this.props);
    return(
      <div className="Items">
          <li>{this.props.item.id}</li>
          <li>Item Name: {this.props.itemName}</li>
          <li>Price: {this.props.item.itemPrice}</li>
          <li>Quantity: {this.props.item.quantity}</li>
          <li><a href="#" onClick={this.onDelete.bind(this,this.props.item.id)}>Delete</a></li>
          <br />
      </div>
    )
  }
}
