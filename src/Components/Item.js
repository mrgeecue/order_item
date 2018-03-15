import React, { Component } from 'react';

export default class Item extends Component{
  onDelete(id){
    this.props.deleteItem(id);
  }

  render(){
    console.log("this was passed through--->",this.props.item);
    return(
      <div className="Items">
          <li>{this.props.item.x.idx}</li>
          <li>Item Name: {this.props.item.x.itemName}</li>
          <li>Price: {this.props.item.x.itemPrice}</li>
          <li>Quantity: {this.props.item.x.quantity}</li>
          <li><a href="#" onClick={this.onDelete.bind(this,this.props.item.id)}>Delete</a></li>
          <br />
      </div>
    )
  }
}
