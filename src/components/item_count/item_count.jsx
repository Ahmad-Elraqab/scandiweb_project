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

    itemSrcStyle = {
        width: "75px",
        height: "100%",
        marginLeft: "0.5rem",
    }

    imgStyle = {
        height: "100%",
        width: "90px",
        objectFit: "cover",
    }
    render() {

        return (

            <div className="view">

                <div className="item_column">
                    {
                        <IconButton isMini={this.props.isMini} imgSrc={Plus} width={"25px"} height={"25px"} padding={"1rem"} type="normal" borderRadius={"0px"} isBorder={true} />
                    }
                    <div style={this.props.isMini ? {
                        fontSize: "12px",
                        fontWeight: "600"
                    } : null} className="text_vlaue">1</div>
                    {
                        <IconButton isMini={this.props.isMini} imgSrc={Minus} width={"25px"} height={"25px"} padding={"1rem"} type="normal" borderRadius={"0px"} isBorder={true} />
                    }
                </div>

                <div style={this.props.isMini ? this.itemSrcStyle : null} className="item_src">
                    <img style={this.props.isMini ? this.imgStyle : null} src={Logo} alt="" />
                </div>

            </div >

        )
    }
}

export default ItemCount