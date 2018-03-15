import React, { Component } from 'react';
import './App.css';
import AddItem from  './Components/AddItem';
import Item from './Components/Item';
import ItemList from './Components/ItemList';
import uuid from 'uuid';
const inventory = require('./data/items.json')

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      items:[]
    }
  }

  componentWillMount(){
    console.log('componentWillMount');
    let inventoryList;
    inventoryList = inventory.items.map((x,key) => {
      console.log("items--->", x);
      return (
        {x}
      )
    });
    console.log("inventoryList-->", inventoryList);
    this.setState({items:inventoryList}, function(){
      console.log("this is the current state-->",this.state);
    });
  }

  componentDidMount(){

  }

  handleAddItem(item){
    console.log("what did i just log??",item);
    let newItemList = this.state.items;
    newItemList.push(item);
    this.setState({items:newItemList});
  }

  deleteItem(id){
    console.log("lets delete this item--->", id);
    let items = this.state.items;
    let index = items.findIndex(x => x.id === id);
    items.splice(index,1);
    this.setState({items:items})
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1>Order Item Project</h1>
          </header>
          <br />
          <AddItem addItem={this.handleAddItem.bind(this)}/>
          <ItemList itemList={this.state.items} handleDelete={this.deleteItem.bind(this)} />
        </div>
    );
  }
}
