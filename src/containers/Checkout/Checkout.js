import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as action from '../../store/actions/index';

const Checkout = (props) => {

    // componentDidMount() {
    //     // this.props.onInitPurchase()
    // }

    const checkoutCancelledHandler = () => {
        // props.history.push('/')
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data')
    }


    let summary = <Redirect to='/' />
    if (props.ings) {
        const purchasedRedirect = props.purchased ? <Redirect to='/orders' /> : null
        summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary
                    ingredients={props.ings}
                    checkoutCancelled={checkoutCancelledHandler}
                    checkoutContinued={checkoutContinuedHandler}
                />
                <Route
                    path={props.match.url + '/contact-data'}
                    component={ContactData}
                />

            </div>
        )
    }
    return summary;

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