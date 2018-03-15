import React, { Component } from 'react';
import Item from './Item';

export default class ItemList extends Component{

  handleDeleteItem(id){
    this.props.handleDelete(id)
  }

  render(){
    console.log("these are the props.itemList--->", this.props.itemList);
    let items;
    if(this.props.itemList){
      items = this.props.itemList.map((stuff,idx)=>{
        return(
          <Item
            key={idx}
            item={stuff}
            deleteItem={this.handleDeleteItem.bind(this)}
          />
        )
      })
    }
    return(
      <div className="ItemList">
        <h3>Inventory</h3>
        {items}
      </div>
    )
  }
}
