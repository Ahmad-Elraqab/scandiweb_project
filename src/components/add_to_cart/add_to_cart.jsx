import React, { Component } from "react"
import ProductSize from "../../components/product_size/product_size"
import IconButton from "../../components/icon_button/icon_button"
import "./add_to_cart.scss"


class AddToCart extends Component {

    constructor({ props }) {
        super(props)
        this.state = props
    }

    render() {
        return (
            <div className="panel">

                <div style={{ textAlign: "start" }}>
                    <p style={{ fontWeight: 600, fontSize: 30, margin: 0 }}>Apollo</p>
                    <p style={{ fontWeight: 400, fontSize: 30, marginTop: 0 }}>Running Short</p>
                </div>
                <p style={{ textAlign: "start", fontWeight: 700, fontSize: 18 }}>SIZE:</p>
                <ProductSize />
                <div style={{ textAlign: "start", marginBottom: "2rem" }}>
                    <p style={{ fontWeight: 700, fontSize: 18 }}>PRICE:</p>
                    <p style={{ fontWeight: 700, fontSize: 24 }}>$50.00</p>
                </div>
                <IconButton title={"ADD TO CART"} height={"25px"} type="text" borderRadius={"0px"} backgroundColor={"#5ECE7B"} padding={"1rem"} />

                <br />
                <p style={{ textAlign: "start" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consectetur adipisicing elit. iste, incidunt veritatis molestias, ducimus necessitatibus in beatae qui consequatur animi accusantium autem quaerat possimus explicabo commodi dignissimos illo unde! Minima!</p>

            </div >
        )
    }
}
export default AddToCart