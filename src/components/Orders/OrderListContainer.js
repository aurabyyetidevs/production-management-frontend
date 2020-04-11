import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OrderListComponent from "./OrderList/OrderListComponent";

class OrderListContainer extends Component {

    render() {
        return (
            <OrderListComponent/>
        );
    }
}

OrderListContainer.propTypes = {};

export default OrderListContainer;
