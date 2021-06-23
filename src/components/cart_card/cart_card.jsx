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
        fontWeight: "600",
        fontSize: "12px !important",
        width: "100%",
        margin: 0,
    }

    cardLayoutMini = {
        borderTop: "1px solid white",
        borderBottom: "1px solid white",
        padding: "0rem",
        width: "100%",
        height: "150px",
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "row",

    }

    render() {

        const { data, updateData, updateItem } = this.props

        return (
            <div className="card_layout" style={this.props.isMini ? this.cardLayoutMini : null}>

                <div className="items">

                    <p style={this.props.isMini ? this.miniStyle : { fontWeight: 600, fontSize: 30, margin: 0 }}>{data ? data.name : null}</p>
                    <br />
                    <p style={this.props.isMini ? this.miniStyle : { fontWeight: 700, fontSize: 25, margin: 0 }}>{data ? "$" + data.prices[0].amount * data.count : null}</p>
                    <br />

                    {data ? data.attributes.map((e) =>
                        [<ProductSize data={e} onClick={updateData} state={data} isMini={this.props.isMini} />,
                        data.activeAttributes.has(e.name) ? null : updateData(e.name, '')]
                    ) : null}


                </div>

                <div className="items" >
                    <ItemCard isMini={this.props.isMini} data={data} updateItem={updateItem} />
                </div>


            </div >
        )
    }
}

export default CartCard