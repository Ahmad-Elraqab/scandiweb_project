import React, { Component } from "react"
import Template from "../../components/template/template"
import ProductDescriptionZoom from "../../components/product_description_zoom/product_description_zoom"
import AddToCart from "../../components/add_to_cart/add_to_cart"
import "./product_description.scss"

class ProductDescription extends Component {


    constructor({ props }) {
        super({ props })
        this.state = props
    }

    render() {
        return (
            <Template>
                <div className="product_description">
                    <ProductDescriptionZoom />
                    <AddToCart />
                </div>
            </Template>
        )
    }
}

export default ProductDescription