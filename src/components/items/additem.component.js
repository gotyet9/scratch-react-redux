import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddItem extends Component {
  render() {
    return (
      <div className="add_item_div">
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="product" className="mr-sm-2">Product name</Label>
            <Input invalid={this.props.formErrors.name ? true : false} value={this.props.name} type="text" name="name" id="product" placeholder="Product name" onChange={this.props.handleFieldChange} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="qty" className="mr-sm-2">Quantity</Label>
            <Input invalid={this.props.formErrors.quantity ? true : false} value={this.props.quantity} type="number" name="quantity" id="qty" placeholder="Quantity" onChange={this.props.handleFieldChange} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="price" className="mr-sm-2">Price</Label>
            <Input invalid={this.props.formErrors.price ? true : false} value={this.props.price} type="number" name="price" id="price" placeholder="Price" onChange={this.props.handleFieldChange} />
          </FormGroup>
          <Button color='primary' disabled={!this.props.formValid} onClick={(event) => this.props.handleAddItem(event)} type='button'>Add</Button>
        </Form>
      </div>
    );
  }
}

export default AddItem;
