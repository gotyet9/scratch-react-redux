import React, { Component } from 'react';
import { Table } from 'reactstrap';

class ItemsList extends Component {

  renderItems() {
    return this.props.items.map(item => {
      let total=(item.price * item.qty).toFixed(2)
      return (
        <tr key={item.product+item.price}>
          <td>{item.product}</td>
          <td>{item.qty}</td>
          <td>{item.price}</td>
          <th scope="row">${total}</th>
        </tr>
      )
    })
  }

  render() {
    return (
      <Table responsive hover bordered>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </Table>
    );
  }
}

export default ItemsList;
