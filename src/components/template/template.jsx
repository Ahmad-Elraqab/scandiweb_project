import React, { Component } from "react"
import Navigation from "../navigation/navigation"
import Currency from "../currency/currency"
import Notification from "../notification/notification"
import { fetchProducts } from "../../redux/category/category_action"
import { setRoute } from "../../redux/category/category_action"
import { connect } from "react-redux";
import { fetchCurrencies } from "../../redux/cart/cart_action"
import { changeCurrency } from "../../redux/cart/cart_action"
import { toggleCurrency } from "../../redux/navigation/navigation_action"
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
        const { setRoute, categories, currentCategory, isCartOpen, currencies, isCurrencyOpen, changeCurrency, toggleCurrency } = this.props;


        return (
            <div className="template">

                <div>
                    <Navigation categories={categories} currentCategory={currentCategory} onClick={setRoute} />
                </div>

                {this.props.children}

                <div style={{ display: isCartOpen ? "block" : "none" }} className="notification">
                    <Notification />
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
    currencies: cartReducer.currencies
});

const mapDispatchToProps = (dispatch) => {

    return {
        fetchProducts: () => dispatch(fetchProducts()),
        setRoute: (value) => dispatch(setRoute(value)),
        fetchCurrencies: () => dispatch(fetchCurrencies()),
        changeCurrency: (value) => dispatch(changeCurrency(value)),
        toggleCurrency: () => dispatch(toggleCurrency())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Template)

