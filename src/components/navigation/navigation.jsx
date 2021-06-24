import React, { Component } from "react"
import "./navigation.scss"
import IconButton from "../icon_button/icon_button"
import logo from "../../assets/icons/logo.png"
import cartIcon from "../../assets/icons/Vector.svg"
import { Link } from "react-router-dom";

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { toggleCart, toggleCurrency, cartItemCount, currentCurrencyIndex } = this.props
        return (
            <div className="navigation">
                <ul className="navigation_list">

                    {
                        this.props.categories.map(e => (
                            e === this.props.currentCategory ?
                                (<Link to="/" style={{ textDecoration: "none" }}>
                                    <li className="active">{e.toUpperCase()}</li></Link>
                                ) :
                                (<Link to="/" style={{ textDecoration: "none" }}><li onClick={() => this.props.onClick(e)}>{e.toUpperCase()}</li></Link>)
                        ))
                    }

                </ul>

                <Link to="/">
                    <div className="logo_div">
                        <img src={logo} alt="" />
                    </div>
                </Link>

                <ul className="navigation_options">
                    <li><IconButton imgSrc={currentCurrencyIndex.symbol} width={"25px"} height={"25px"} type="dropdown" borderRadius={"60%"} onclick={toggleCurrency} /></li>
                    <li><IconButton imgSrc={cartIcon} width={"25px"} height={"25px"} type="notifier" borderRadius={"60%"} onclick={toggleCart} cartCount={cartItemCount} /></li>
                </ul>

            </div >
        )
    }
}

export default Navigation