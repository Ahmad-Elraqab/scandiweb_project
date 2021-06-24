import React, { Component } from "react"
import ProductDescriptionZoom from "../../components/product_description_zoom/product_description_zoom"
import AddToCart from "../../components/add_to_cart/add_to_cart"
import "./product_description.scss"
import { setNextRoute } from "../../redux/category/category_action"
import { releaseSelectedProduct } from "../../redux/category/category_action"
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart_action"
import shorid from "shortid"
import history from '../../redux/history';

class ProductDescription extends Component {


    constructor() {
        super()
        if (window.performance) {
            if (performance.navigation.type == 1) {
                history.push('/');
            }
        }
        this.state = {
            activeAttributes: new Map()
        }
    }

    onClick = (attribute, value, name = '') => {

        this.setState(
            {
                activeAttributes:
                    this.state.activeAttributes.set(attribute + '', value)
            }
        )

    }

    addToCart = (product) => {

        const activeAttributes = new Map([...this.state.activeAttributes])


        const data = { ...product, activeAttributes, "count": 1, "id": shorid.generate() }


        this.props.addToCart(data)


        // return <Redirect to='/cart' />
    }

    componentWillUnmount() {

        const { releaseSelectedProduct } = this.props

        releaseSelectedProduct()

    }

    render() {

        const { selectedProduct, setNextRoute, currentCurrencyIndex } = this.props

        setNextRoute(this.props.match.params.name)

        return (
            < div className="product_description" >
                <ProductDescriptionZoom data={selectedProduct} />
                <AddToCart data={selectedProduct} addToCart={this.addToCart} onClick={this.onClick}
                    state={this.state} currentCurrencyIndex={currentCurrencyIndex} />
            </div >
        )
    }
}

const mapStateToProps = ({ categoryReducer, cartReducer }) => ({
    selectedProduct: categoryReducer.selectedProduct,
    currentCurrencyIndex: cartReducer.currentCurrencyIndex
});

const mapDispatchToProps = (dispatch) => {

    return {
        setNextRoute: (value) => { dispatch(setNextRoute(value)) },
        addToCart: (value) => { dispatch(addToCart(value)) },
        releaseSelectedProduct: () => { dispatch(releaseSelectedProduct()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription)


