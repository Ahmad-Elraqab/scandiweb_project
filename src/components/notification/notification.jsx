import React, { Component } from "react"
import CartCard from "../cart_card/cart_card"
import IconButton from "../../components/icon_button/icon_button"
import { connect } from "react-redux";

import "./notification.scss"

class Notification extends Component {

    constructor({ props }) {
        super(props)
        this.state = props
    }
    notificationStyle = new Map()
    render() {
        const { isCartOpen } = this.props


        return (

            <div style={{ display: isCartOpen ? "block" : "none" }} className="notification-body">

                <p><b>My Bag</b>, 2 items</p>
                <br />
                <div className="pos">

                    <CartCard isMini={true} />
                    <CartCard isMini={true} />
                    <CartCard isMini={true} />
                    <CartCard isMini={true} />
                </div>
                <br />
                <div className="total">
                    <p>Total</p>
                    <p>$100.00</p>
                </div>
                <br />
                <div className="checkout_btn">
                    <IconButton title={"VIEW BAG"} width={"75%"} padding={".9rem"} type="text" borderRadius={"0px"} isBorder={true} />
                    <div style={{ width: "10px" }}></div>
                    <IconButton title={"CHECKOUT"} width={"75%"} padding={"1rem"} color={"white"} backgroundColor={"#5ECE7B"} type="text" borderRadius={"0px"} />

                </div>

            </div>
        )
    }
}


const mapStateToProps = ({ navigationReducer }) => ({
    isCartOpen: navigationReducer.isCartOpen,
    isCurrencyOpen: navigationReducer.isCurrencyOpen,

});

const mapDispatchToProps = (dispatch) => {

    return {


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notification)

