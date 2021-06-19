import React, { Component } from "react"
import CartCard from "../../components/cart_card/cart_card"
import "./cart.scss"



class Cart extends Component {


    constructor({ props }) {
        super(props)
        this.state = props
    }


    render() {
        return (
            <div className="cart">
                <p className="innerText">CART</p>

                <CartCard />
                <CartCard />
                <CartCard />
            </div>
        )
    }

}

export default Cart