import React, { Component } from 'react';
import './App.css';
import AddItem from  './Components/AddItem';
import ItemList from './Components/ItemList';
const inventory = require('./data/items.json')

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      items:[]
    }

  }

  componentWillMount(){
    console.log("this is inventory--->",inventory.items);
    let inventoryCopy = inventory.items.slice();
    this.setState({items:inventoryCopy}, function(){
      console.log("this is the current state--->", this.state.items);
    })
  }

  handleAddItem = (item) => {
    console.log("what did i just log??",item);
    let newItemList = this.state.items;
    newItemList.push(item);
    this.setState({items:newItemList});
  }

    onDeleteItem = (i) => {
      console.log("Delete made it back up to App", i);
      let updatedItemList = this.state.items.slice();
      updatedItemList.splice(i,1);
      this.setState({items:updatedItemList})
    }

    render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1>Order Item Project</h1>
          </header>
          <br />
          <AddItem addItem={this.handleAddItem}/>
          <ItemList itemList={this.state.items} handleDeleteItem={this.onDeleteItem}/>
        </div>
    );
  }
}
