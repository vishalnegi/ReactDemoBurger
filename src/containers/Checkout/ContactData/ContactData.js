import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            steet: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        // event.preventDefault()   //for stopping the page from reloading on button click
        console.log(this.props.ingredients)

        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: '',
                address: {
                    street: 'nayi',
                    zipcode: '89798',
                    country: 'India'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response)
                this.setState({ loading: false })
                this.props.history.push('/')
            })
            .catch(error => {
                console.log(error)
                this.setState({ loading: false })
            })
    }

    render() {

        let form = (
            <form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="text" name="email" placeholder="Your email" />
                <input type="text" name="street" placeholder="Street" />
                <input type="text" name="postal" placeholder="Postal Code" />
                <Button clicked={this.orderHandler} btnType='Success' >ORDER</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData