import React, { Component } from "react"
import ProductDescriptionZoom from "../../components/product_description_zoom/product_description_zoom"
import AddToCart from "../../components/add_to_cart/add_to_cart"
import "./product_description.scss"
import { setNextRoute } from "../../redux/category/category_action"
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart_action"
import { Redirect } from 'react-router-dom'

class ProductDescription extends Component {


    constructor() {
        super()
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

        console.log(activeAttributes)

        const data = { ...product, activeAttributes, "count": 1 }


        this.props.addToCart(data)


        // return <Redirect to='/cart' />
    }


    render() {

        const { selectedProduct, setNextRoute } = this.props

        setNextRoute(this.props.match.params.name)

        return (
            < div className="product_description" >
                <ProductDescriptionZoom data={selectedProduct} />
                <AddToCart data={selectedProduct} addToCart={this.addToCart} onClick={this.onClick} state={this.state} />
            </div >
        )
    }
}

const mapStateToProps = ({ categoryReducer }) => ({
    selectedProduct: categoryReducer.selectedProduct,
});

const mapDispatchToProps = (dispatch) => {

    return {
        setNextRoute: (value) => { dispatch(setNextRoute(value)) },
        addToCart: (value) => { dispatch(addToCart(value)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription)


