import React, { Component } from "react"
import ProductSize from "../../components/product_size/product_size"
import IconButton from "../../components/icon_button/icon_button"
import "./add_to_cart.scss"
import parse from 'html-react-parser';

class AddToCart extends Component {

    constructor(props) {
        super(props)
        this.state = this.props.state
    }

    render() {
        const { data, onClick, addToCart, state } = this.props

        return (
            <div className="panel">

                <div style={{ textAlign: "start" }}>
                    <p style={{ fontWeight: 600, fontSize: 30, margin: 0 }}>{data.name}</p>
                    <p style={{ fontWeight: 400, fontSize: 30, marginTop: 0 }}>{"There there"}</p>
                </div>

                {data ? data.attributes.map((e) =>
                    [state.activeAttributes.has(e.name) ? <h1></h1> : onClick(e.name, ''),
                    <ProductSize data={e} onClick={onClick} state={state} />]
                ) : null}

                <div style={{ textAlign: "start", marginBottom: "2rem" }}>
                    <p style={{ fontWeight: 700, fontSize: 18 }}>PRICE:</p>
                    <p style={{ fontWeight: 700, fontSize: 24 }}>{data ? "$" + data.prices[0]['amount'] : null}</p>
                </div>

                <IconButton onclick={() => addToCart(data)} color={"white"} title={"ADD TO CART"} height={"25px"} type="text" borderRadius={"0px"} backgroundColor={"#5ECE7B"} padding={"1rem"} />

                <br />
                <p style={{ textAlign: "start" }}>{parse("" + data.description)}</p>

            </div >
        )
    }
}
export default AddToCart