import React, { Component } from "react"
import ProductSize from "../../components/product_size/product_size"
import ItemCard from "../../components/item_count/item_count"
import "./cart_card.scss"


class CartCard extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between",
        alignItems: "flex-start",
    }

    render() {

        const { data, updateData } = this.props

        return (
            <div className="card_layout" style={this.props.isMini ? this.cardLayoutMini : null}>
                {console.log}
                <div style={{ textAlign: "start", height: "100%" }}>
                    <div className="cart_card_header">
                        <p style={this.props.isMini ? this.miniStyle : { fontWeight: 600, fontSize: 30, margin: 0 }}>{data ? data.name : null}</p>
                        <p style={this.props.isMini ? this.miniStyle : { fontWeight: 400, fontSize: 30, margin: 0 }}>There there</p>
                    </div>
                    <br />
                    <div style={this.props.isMini ? { width: "100%" } : { width: "500px" }}>
                        {data ? data.attributes.map((e) =>
                            [data.activeAttributes.has(e.name) ? <h1></h1> : updateData(e.name, ''),
                            <ProductSize data={e} onClick={updateData} state={data} />]
                        ) : null}
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