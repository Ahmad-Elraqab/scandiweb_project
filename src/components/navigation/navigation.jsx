import React, { Component } from "react"
import "./navigation.scss"
import IconButton from "../icon_button/icon_button"
import logo from "../../assets/icons/logo.png"
import currencyIcon from "../../assets/icons/$.svg"
import cartIcon from "../../assets/icons/Vector.svg"

class Navigation extends Component {

    constructor({ props }) {
        super(props)
        this.state = {
            categories: [],
            currentCategory: [],
        }
    }
    componentDidMount() {

        this.props.fetchPosts().then(response => {
            this.setState({
                categories: response.categories,
                currentCategory: response.currentCategory,
            });
        });
    }

    render() {
        console.log(this.props)
        return (
            <div className="navigation">
                <ul className="navigation_list">
                    {
                        this.state.categories.forEach(e => {
                            e === this.props.currentCategory ?
                                <li className={"active"}>{e}</li> :
                                <li>{e}</li>
                        })
                    }

                </ul>

                <div className="logo_div">
                    <img src={logo} alt="" />
                </div>

                <ul className="navigation_options">
                    <li><IconButton imgSrc={currencyIcon} width={"25px"} height={"25px"} type="dropdown" borderRadius={"60%"} /></li>
                    <li><IconButton imgSrc={cartIcon} width={"25px"} height={"25px"} type="notifier" borderRadius={"60%"} /></li>
                </ul>

            </div>
        )
    }
}

export default Navigation