import React, { Component } from "react"
import CartCard from "../../components/cart_card/cart_card"
import { connect } from "react-redux";
import "./cart.scss"
import { deleteFromCart, updateCartItem } from "../../redux/cart/cart_action";
import { updateCart } from "../../redux/cart/cart_action";



class Cart extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        const { products, updateCart, updateCartItem } = this.props

        return (
            <div className="cart">
                <p className="innerText">CART</p>
                {
                    products ? products.map((e) =>
                        <CartCard data={e} updateData={updateCart} updateItem={updateCartItem} />
                    ) : null

                }

            </div>
        )
    }

}
const mapStateToProps = ({ cartReducer }) => ({
    products: cartReducer.products,
});

const mapDispatchToProps = (dispatch) => {

    return {
        updateCart: (value, value2, value3) => { dispatch(updateCart(value, value2, value3)) },
        deleteFromCart: (value) => { dispatch(deleteFromCart(value)) },
        updateCartItem: (value, value2) => { dispatch(updateCartItem(value, value2)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)


