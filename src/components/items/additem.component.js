import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddItem extends Component {
  render() {
    return (
      <div className="add_item_div">
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="product" className="mr-sm-2">Product name</Label>
          <Input type="text" name="product" id="product" placeholder="Product name" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="qty" className="mr-sm-2">Quantity</Label>
          <Input type="text" name="qty" id="qty" placeholder="Quantity" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="price" className="mr-sm-2">Price</Label>
          <Input type="text" name="price" id="price" placeholder="Price" />
        </FormGroup>
        <Button color='primary' type='button'>Add</Button>
      </Form>
      </div>
    );
  }
}

export default AddItem;
