import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OrderListComponent from "./OrderList/OrderListComponent";

class OrderListContainder extends Component {

    render() {
        return (
            <OrderListComponent/>
        );
    }
}

OrderListContainder.propTypes = {};

export default OrderListContainder;
