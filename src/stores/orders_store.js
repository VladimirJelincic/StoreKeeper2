import alt from '../alt';
import immutableUtil from 'alt/utils/ImmutableUtil';
import OrdersActions from '../actions/orders_actions';
import Immutable from 'immutable';

class OrdersStore {
    constructor() {
        this.orders = Immutable.List();
        this.selectedStatus = 'all';
        this.amountFilter = null;

        this.bindListeners({
            handleUpdateOrders: OrdersActions.UPDATE_ORDERS,
            handleFetchOrders: OrdersActions.FETCH_ORDERS,
            handleUpdateAmountFilter: OrdersActions.UPDATE_AMOUNT_FILTER,
            handleUpdateSelectedStatus: OrdersActions.UPDATE_SELECTED_STATUS,
        });
    }

    handleUpdateSelectedStatus(status) {
        this.selectedStatus = status;
    }

    handleUpdateOrders(orders) {
        this.orders = orders;
    }

    handleUpdateAmountFilter(amount) {
        this.amountFilter = amount;
    }

    handleFetchOrders() {
        this.orders = [];
    }
}

export default alt.createStore(immutableUtil(OrdersStore));
