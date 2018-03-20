import React from 'react';
import Item from './Item';
import { Table } from 'react-bootstrap';

const ItemList = ({itemList, handleDeleteItem}) => {

  const deleteItem = (i) => (event) => {
    event.preventDefault();
    console.log("clicked onDelete---", i);
    handleDeleteItem(i);
  };

  let items;
  if(itemList){
    items = itemList.map((item,i)=>{
      return(
        <Item key={i} item={item} handleClick={deleteItem(i)} />
      );
    });
  }

  return(
    <div className="ItemList">
      <h3>Inventory</h3>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items}
          </tbody>
      </Table>
    </div>
  )
}

export default ItemList;
