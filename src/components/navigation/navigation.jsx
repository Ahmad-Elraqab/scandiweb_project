import React, { Component } from "react"
import "./navigation.scss"
import IconButton from "../icon_button/icon_button"
import logo from "../../assets/icons/logo.png"
import currencyIcon from "../../assets/icons/$.svg"
import cartIcon from "../../assets/icons/Vector.svg"
import { connect } from "react-redux";
import { toggleCart } from "../../redux/navigation/navigation_action"
import { toggleCurrency } from "../../redux/navigation/navigation_action"

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { toggleCart, toggleCurrency } = this.props
        return (
            <div className="navigation">
            
                <ul className="navigation_list">
                    {
                        this.props.categories.map(e => (
                            e === this.props.currentCategory ?
                                (<li className="active">{e.toUpperCase()}</li>) :
                                (<li onClick={() => this.props.onClick(e)}>{e.toUpperCase()}</li>)
                        ))
                    }

                </ul>

                <div className="logo_div">
                    <img src={logo} alt="" />
                </div>

                <ul className="navigation_options">
                    <li><IconButton imgSrc={currencyIcon} width={"25px"} height={"25px"} type="dropdown" borderRadius={"60%"} onclick={toggleCurrency} /></li>
                    <li><IconButton imgSrc={cartIcon} width={"25px"} height={"25px"} type="notifier" borderRadius={"60%"} onclick={toggleCart} /></li>
                </ul>

            </div>
        )
    }
}


const mapStateToProps = ({ navigationReducer }) => ({
    // isCartOpen: navigationReducer.isCartOpen,
    // isCurrencyOpen: navigationReducer.isCurrencyOpen,

});

const mapDispatchToProps = (dispatch) => {

    return {

        toggleCurrency: () => dispatch(toggleCurrency()),
        toggleCart: () => dispatch(toggleCart())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation)

