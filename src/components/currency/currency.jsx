import React, { Component } from "react"
import "./currency.scss"

class Currency extends Component {

    constructor(props) {
        super(props)
        this.state = props
    }

    render() {
        const { isCurrencyOpen, currencies, changeCurrency, toggleCurrency } = this.props

        return (

            <div onClick={toggleCurrency} style={{ display: isCurrencyOpen ? "flex" : "none" }} className="currency-body">

                {currencies.map((e) => (<div onClick={() => changeCurrency(e)} style={{ fontSize: "14px !important", cursor: "pointer" }}><p>{e.symbol + " " + e.name}</p></div>))}

            </div>
        )
    }
}

export default Currency