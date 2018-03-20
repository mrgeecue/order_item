import React from 'react';
import { Button } from 'react-bootstrap';

const Item = ({item, handleClick}) => {

  return(
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.quantity} </td>
      <td><Button type="button" bsStyle="danger" onClick={handleClick}>Delete</Button></td>
    </tr>
  )
}
 export default Item;
