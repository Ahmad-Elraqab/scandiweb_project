import React, { Component } from "react"
import "./product_size.scss"


class ProductSize extends Component {


    constructor({ props }) {
        super(props)
        this.state = props
    }

    sizeMini = {
        width: "17px",
        height: "17px",
        border: "1px solid black",
        padding: "0.2rem",
        fontSize: "12px",
        alignContent: "space-between",
        marginRight: "0.5rem",
        fontWeight: "400",
        display: "flex",
        flexDirection: "row",
    }
    render() {
        return (
            <div className="size_list" style={this.props.isMini ? { width: "150%", justifyContent: "start" } : null}>

                <div style={this.props.isMini ? this.sizeMini : null} className="size">XS</div>
                <div style={this.props.isMini ? this.sizeMini : null} className="size selected">M</div>
                <div style={this.props.isMini ? this.sizeMini : null} className="size">L</div>
                <div style={this.props.isMini ? this.sizeMini : null} className="size">S</div>

            </div >
        )
    }
}

export default ProductSize