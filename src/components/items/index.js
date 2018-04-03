import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems,addItem } from '../../actions/items.action';
import { Container } from 'reactstrap';

//components import
import ItemsList from './items.component';
import AddItem from './additem.component';
import GrandTotal from './grandtotal.component';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      price: '',
      formErrors: { name: '', quantity: '', price: '' },
      nameValid: false,
      quantityValid: false,
      priceValid: false,
      formValid: false
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleItemAdd = this.handleItemAdd.bind(this);
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  handleUserInput(e) {
    
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }


  validateField(fieldName, value) {
    
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let quantityValid = this.state.quantityValid;
    let priceValid = this.state.priceValid;

    switch (fieldName) {
      case 'name':
        nameValid = value.length > 0;
        fieldValidationErrors.name = nameValid ? '' : 'Name is required!';
        break;
      case 'quantity':
        quantityValid = value.match(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/);
        fieldValidationErrors.quantity = quantityValid ? '' : 'Quantity is invalid';
        break;
      case 'price':
        priceValid = value.match(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/);
        fieldValidationErrors.price = priceValid ? '' : 'Price is invalid';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      quantityValid: quantityValid,
      priceValid: priceValid
    }, this.validateForm);
  }

  validateForm() {
    
    this.setState({ formValid: this.state.nameValid && this.state.quantityValid && this.state.priceValid });
  }

  handleItemAdd(event) {
    
    let payload = {
      "product": this.state.name,
      "qty": parseInt(this.state.quantity),
      "price": parseFloat(this.state.price)
    }
    this.props.addItem(payload)
    this.setState({name:'',quantity:'',price:''})
  }

  render() {
    return (
      <Container>
        <AddItem formValid={this.state.formValid} handleFieldChange={this.handleUserInput} handleAddItem={this.handleItemAdd} formErrors={this.state.formErrors} name={this.state.name} quantity={this.state.quantity} price={this.state.price}/>
        <br />
        <div className="items-list-div">
        <ItemsList items={this.props.items} />
        <GrandTotal items={this.props.items} />
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  
    return { items: state.items.list };
}

export default connect(mapStateToProps, { fetchItems,addItem })(Items)
