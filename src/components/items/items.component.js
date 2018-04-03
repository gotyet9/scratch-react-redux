import React, { Component } from 'react';
import { Table } from 'reactstrap';

class ItemsList extends Component {
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
          <tr>
            <td>Dummy product</td>
            <td>Dummy quantity</td>
            <td>Dummy price</td>
            <th scope="row">Dummy total</th>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ItemsList;
