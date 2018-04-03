import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchItems} from '../../actions/items.action';
import { Container } from 'reactstrap';

//components import
import ItemsList from './items.component';
import AddItem from './additem.component';

class Items extends Component {

    componentDidMount() {
        this.props.fetchItems();
    }
  render() {
    return (
      <Container>
        <AddItem />
        <br/>
        <ItemsList />
      </Container>
    );
  }
}

function mapStateToProps(state) {
    debugger
    return {items:state};
}

export default connect(mapStateToProps, {fetchItems})(Items)
