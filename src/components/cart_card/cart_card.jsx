import React, { Component } from "react"
import ProductSize from "../../components/product_size/product_size"
import ItemCard from "../../components/item_count/item_count"
import "./cart_card.scss"


class CartCard extends Component {

    constructor({ props }) {
        super(props)
        this.state = props
    }

    miniStyle = {
        fontWeight: 400,
        fontSize: 14,
        margin: 0,
    }

    cardLayoutMini = {
        borderTop: "1px solid white",
        borderBottom: "1px solid white",
        padding: "0rem",
        marginBottom: "2rem",
        height: " 130px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between",
        alignItems: "flex-start",
    }

    render() {
        return (
            <div className="card_layout" style={this.props.isMini ? this.cardLayoutMini : null}>
                <div style={{ textAlign: "start", height: "100%" }}>
                    <div className="cart_card_header">
                        <p style={this.props.isMini ? this.miniStyle : { fontWeight: 600, fontSize: 30, margin: 0 }}>Apollo</p>
                        <p style={this.props.isMini ? this.miniStyle : { fontWeight: 400, fontSize: 30, margin: 0 }}>Running Short</p>
                        <p style={this.props.isMini ? { fontWeight: 600, fontSize: 14, marginTop: "0.7rem" } : { fontWeight: 600, fontSize: 24, margin: 0 }}>$50.00</p>
                    </div>
                    <br />
                    <div style={this.props.isMini ? { width: "100%" } : { width: "500px" }}>
                        <ProductSize isMini={this.props.isMini} />
                    </div>
                </div>


                <div className="items" style={this.props.isMini ? { width: "43%" } : null}>
                    <ItemCard isMini={this.props.isMini} />
                </div>


            </div>
        )
    }
}

export default CartCard