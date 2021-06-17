import React, { Component } from "react"
import "./product_description_zoom.scss"
import Item from "../../assets/icons/item.svg"

class ProductDescriptionZoom extends Component {

    constructor({ props }) {
        super(props)
        this.state = props
    }

    render() {
        return (
            <div className={"product_view"}>

                <ul>
                    <li><img src={Item} alt="" /></li>
                    <li><img src={Item} alt="" /></li>
                    <li><img src={Item} alt="" /></li>
                </ul>

                <div className="img_view">
                    <img src={Item} alt="" />
                </div>
            </div>
        )
    }
}
export default ProductDescriptionZoom