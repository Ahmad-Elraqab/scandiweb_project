import React, { Component } from "react"
import Navigation from "../../components/navigation/navigation"
import Currency from "../../components/currency/currency"
import MiniCart from "../../components/mini_cart/mini_cart"
import { fetchProducts } from "../../redux/category/category_action"
import { setRoute } from "../../redux/category/category_action"
import { connect } from "react-redux";
import { fetchCurrencies } from "../../redux/cart/cart_action"
import { changeCurrency } from "../../redux/cart/cart_action"
import { toggleCurrency } from "../../redux/navigation/navigation_action"
import { toggleCart } from "../../redux/navigation/navigation_action";
import { updateCart, updateCartItem } from "../../redux/cart/cart_action"
import "./template.scss"


class Template extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        const { fetchProducts, fetchCurrencies } = this.props
        fetchProducts()
        fetchCurrencies()
    }

    render() {
        const { setRoute, categories, currentCategory, isCartOpen, currencies, isCurrencyOpen, changeCurrency, toggleCurrency,
            currentCurrencyIndex, total, cartItemCount, products, updateCartItem, updateCart, toggleCart
        } = this.props;


        return (
            <div className="template">

                <div>
                    <Navigation categories={categories} currentCategory={currentCategory} onClick={setRoute}
                        toggleCurrency={toggleCurrency} toggleCart={toggleCart} cartItemCount={cartItemCount}
                        currentCurrencyIndex={currentCurrencyIndex}
                    />
                </div>

                {this.props.children}

                <div style={{ display: isCartOpen ? "block" : "none" }} className="notification">
                    <MiniCart currentCurrencyIndex={currentCurrencyIndex} total={total} cartItemCount={cartItemCount} products={products}
                        isCartOpen={isCartOpen} isCurrencyOpen={isCurrencyOpen} updateCartItem={updateCartItem} updateCart={updateCart} toggleCart={toggleCart} />
                </div>

                <Currency currencies={currencies} isCurrencyOpen={isCurrencyOpen} changeCurrency={changeCurrency} toggleCurrency={toggleCurrency} />
            </div>
        )
    }

}

const mapStateToProps = ({ categoryReducer, navigationReducer, cartReducer }) => ({
    categories: categoryReducer.categories,
    currentCategory: categoryReducer.currentCategory,
    isCartOpen: navigationReducer.isCartOpen,
    isCurrencyOpen: navigationReducer.isCurrencyOpen,
    currencies: cartReducer.currencies,
    products: cartReducer.products,
    total: cartReducer.total,
    cartItemCount: cartReducer.cartItemCount,
    currentCurrencyIndex: cartReducer.currentCurrencyIndex


});

const mapDispatchToProps = (dispatch) => {

    return {
        fetchProducts: () => dispatch(fetchProducts()),
        setRoute: (value) => dispatch(setRoute(value)),
        fetchCurrencies: () => dispatch(fetchCurrencies()),
        changeCurrency: (value) => dispatch(changeCurrency(value)),
        updateCart: (value1, value2, value3) => { dispatch(updateCart(value1, value2, value3)) },
        updateCartItem: (value1, value2) => { dispatch(updateCartItem(value1, value2)) },
        toggleCurrency: () => dispatch(toggleCurrency()),
        toggleCart: () => { dispatch(toggleCart()) },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Template)