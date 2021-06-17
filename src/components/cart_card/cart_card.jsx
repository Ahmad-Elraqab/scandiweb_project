import React, { Component } from "react"
import ProductSize from "../../components/product_size/product_size"
import ItemCard from "../../components/item_count/item_count"
import "./cart_card.scss"


class CartCard extends Component {

    constructor({ props }) {
        super(props)
        this.state = props
    }

    render() {
        return (
            <div className="card_layout">
                <div style={{ textAlign: "start" }}>
                    <div className="cart_card_header">
                        <p style={{ fontWeight: 600, fontSize: 30, margin: 0 }}>Apollo</p>
                        <p style={{ fontWeight: 400, fontSize: 30, margin: 0 }}>Running Short</p>
                        <p style={{ fontWeight: 600, fontSize: 24, margin: 0 }}>$50.00</p>
                    </div>
                    <br />
                    <div style={{ width: "500px" }}>
                        <ProductSize />
                    </div>
                </div>


                <div className="items">
                    <ItemCard />
                </div>


            </div>
        )
    }
}

export default CartCard