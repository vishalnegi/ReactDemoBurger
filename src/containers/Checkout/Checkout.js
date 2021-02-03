import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as action from '../../store/actions/index';

class Checkout extends Component {

    componentDidMount() {
        // this.props.onInitPurchase()
    }

    checkoutCancelledHandler = () => {
        // this.props.history.push('/')
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {

        let summary = <Redirect to='/' />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/orders' /> : null
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}
                    />
                    <Route
                        path={this.props.match.url + '/contact-data'}
                        component={ContactData}
                    />

                </div>
            )
        }
        return summary;
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased,
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onInitPurchase: () => dispatch(action.purchaseInit())
//     }
// }


export default connect(mapStateToProps)(Checkout);