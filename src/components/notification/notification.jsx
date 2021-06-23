import React, { Component } from "react"
import CartCard from "../cart_card/cart_card"
import IconButton from "../../components/icon_button/icon_button"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCart } from "../../redux/navigation/navigation_action";
import { updateCart, updateCartItem } from "../../redux/cart/cart_action"
import "./notification.scss"

class Notification extends Component {

    constructor({ props }) {
        super(props)
        this.state = props
    }
    notificationStyle = new Map()
    render() {
        const { isCartOpen, products, updateCartItem, updateCart, cartItemCount, total, currentCurrencyIndex } = this.props


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
                    <Link to="/cart" style={{ textDecoration: "none", width: "100%", color: "black" }} onClick={this.props.toggleCart}>
                        <IconButton title={"VIEW BAG"} width={"75%"} padding={".9rem"} type="text" borderRadius={"0px"} isBorder={true} onclick={() => null} />
                    </Link>
                    <div style={{ width: "10px" }}></div>
                    <IconButton title={"CHECKOUT"} width={"75%"} padding={"1rem"} color={"white"} backgroundColor={"#5ECE7B"} type="text" borderRadius={"0px"} />

                </div>}

            </div>
        )
    }
}


const mapStateToProps = ({ navigationReducer, cartReducer }) => ({
    isCartOpen: navigationReducer.isCartOpen,
    isCurrencyOpen: navigationReducer.isCurrencyOpen,
    products: cartReducer.products,
    cartItemCount: cartReducer.cartItemCount,
    total: cartReducer.total,
    currentCurrencyIndex: cartReducer.currentCurrencyIndex
});

const mapDispatchToProps = (dispatch) => {

    return {
        toggleCart: () => { dispatch(toggleCart()) },
        updateCart: (value1, value2, value3) => { dispatch(updateCart(value1, value2, value3)) },
        updateCartItem: (value1, value2) => { dispatch(updateCartItem(value1, value2)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notification)

