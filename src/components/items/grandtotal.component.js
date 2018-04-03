import React, { Component } from 'react';
import { Badge } from 'reactstrap';

class GrandTotal extends Component {

    getGrandTotal() {
        let sum=0;
        this.props.items.map(item => {
            let itemTotal=item.qty*item.price;
            sum+=itemTotal
        })
        return sum;
      }
  render() {
    return (
          <h3 className="badge-style">Grand Total<Badge color="secondary">${this.getGrandTotal()}</Badge></h3>
    );
  }
}

export default GrandTotal;
