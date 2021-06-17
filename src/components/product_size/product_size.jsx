import React, { Component } from "react"
import "./product_size.scss"


class ProductSize extends Component {


    constructor({ props }) {
        super(props)
        this.state = props
    }

    render() {
        return (
            <div className="size_list">

                <div className="size">XS</div>
                <div className="size selected">M</div>
                <div className="size">L</div>
                <div className="size">S</div>

            </div>
        )
    }
}

export default ProductSize