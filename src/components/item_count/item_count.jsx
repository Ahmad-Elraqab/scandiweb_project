import React, { Component } from "react"
import IconButton from "../../components/icon_button/icon_button"
import Logo from "../../assets/icons/Image1.svg"
import Plus from "../../assets/icons/plus.svg"
import Minus from "../../assets/icons/minus.svg"
import "./item_count.scss"

class ItemCount extends Component {


    constructor({ props }) {
        super(props)
        this.state = props
    }

    render() {

        return (

            <div className="view">

                <div className="item_column">
                    <IconButton imgSrc={Plus} width={"25px"} height={"25px"} padding={"1rem"} type="normal" borderRadius={"0px"} isBorder={true} />
                    <div className="text_vlaue">1</div>
                    <IconButton imgSrc={Minus} width={"25px"} height={"25px"} padding={"1rem"} type="normal" borderRadius={"0px"} isBorder={true} />
                </div>

                <div className="item_src">
                    <img src={Logo} alt="" />
                </div>

            </div>

        )
    }
}

export default ItemCount