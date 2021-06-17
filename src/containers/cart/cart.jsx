import React, { Component } from "react"
import Template from "../../components/template/template"
import CartCard from "../../components/cart_card/cart_card"
import "./cart.scss"



class Cart extends Component {


    constructor({ props }) {
        super(props)
        this.state = props
    }


    render() {
        return (
            <Template>
                <div className="cart">
                    <p className="innerText">CART</p>

                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>
            </Template>
        )
    }


}

export default Cart