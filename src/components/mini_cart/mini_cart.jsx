import React, { Component } from "react"
import CartCard from "../cart_card/cart_card"
import IconButton from "../icon_button/icon_button"
import { Link } from "react-router-dom";
import "./mini_cart.scss"

class MiniCart extends Component {

    constructor({ props }) {
        super(props)
        this.state = props
    }
    notificationStyle = new Map()
    // <Notification currentCurrencyIndex={currentCurrencyIndex} total={total} cartItemCount={cartItemCount} products={products}
    // isCartOpen={isCartOpen} isCurrencyOpen={isCurrencyOpen} updateCartItem={updateCartItem} updateCart={updateCart} toggleCart={toggleCart} />
    render() {
        const { currentCurrencyIndex, total, cartItemCount, products, isCartOpen,
            isCurrencyOpen, updateCartItem, updateCart, toggleCart } = this.props


        return (

            <div style={{ display: isCartOpen ? "flex" : "none" }} className="notification-body">

                {cartItemCount === 0 ? null : <p><b>My Bag</b>, {cartItemCount} items</p>}
                <br />
                {cartItemCount === 0 ? <h4>cart is empty <br /> add some items</h4> :
                    <div className="pos">
                        {
                            products ? products.map((e) => (
                                <CartCard isMini={true} data={e} updateData={updateCart} updateItem={updateCartItem} currentCurrencyIndex={currentCurrencyIndex} />
                            )) : null
                        }
                    </div>
                }
                <br />
                {cartItemCount === 0 ? null : <div className="total">
                    <p>Total</p>
                    <p>{currentCurrencyIndex.symbol + Math.round(total)}</p>
                </div>}
                <br />
                {cartItemCount === 0 ? null : <div className="checkout_btn">
                    <Link to="/cart" style={{ textDecoration: "none", width: "100%", color: "black" }} onClick={toggleCart}>
                        <IconButton title={"VIEW BAG"} width={"75%"} padding={".9rem"} type="text" borderRadius={"0px"} isBorder={true} onclick={() => null} />
                    </Link>
                    <div style={{ width: "10px" }}></div>
                    <IconButton title={"CHECKOUT"} width={"75%"} padding={"1rem"} color={"white"} backgroundColor={"#5ECE7B"} type="text" borderRadius={"0px"} />

                </div>}

            </div>
        )
    }
}

export default MiniCart