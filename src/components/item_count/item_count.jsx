import React, { Component } from "react"
import IconButton from "../../components/icon_button/icon_button"
import Plus from "../../assets/icons/plus.svg"
import Minus from "../../assets/icons/minus.svg"
import "./item_count.scss"

class ItemCount extends Component {


    constructor({ props }) {
        super(props)
        this.state = props
    }

    itemSrcStyle = {
        height: "150px",
        width: "100px",
        marginLeft: "0.5rem",
    }

    imgStyle = {
        height: "150px",
        objectFit: "contain",
    }
    render() {

        const { data, updateItem } = this.props

        return (

            <div className="view" style={this.props.isMini ? { height: "150px" } : null} >
                <div className="item_column">
                    {
                        <div onClick={() => updateItem(data.id ? data.id : null, "+")}>
                            <IconButton onclick={() => null} isMini={this.props.isMini} imgSrc={Plus} width={"20px"} height={"20px"}
                                padding={"0.7rem"} type="normal" borderRadius={"0px"} isBorder={true} />
                        </div>
                    }
                    <div style={this.props.isMini ? {
                        fontSize: "12px",
                        fontWeight: "600"
                    } : null} className="text_vlaue">{data ? data.count : null}</div>
                    {
                        <div onClick={() => updateItem(data.id ? data.id : null, "-")}>
                            <IconButton onclick={() => null} isMini={this.props.isMini} imgSrc={Minus} width={"20px"} height={"20px"}
                                padding={"0.7rem"} type="normal" borderRadius={"0px"} isBorder={true} />
                        </div>
                    }
                </div>

                <div style={this.props.isMini ? this.itemSrcStyle : null} className="item_src">
                    <img style={this.props.isMini ? this.imgStyle : null} src={data ? data.gallery[0] : null} alt="" />
                </div>

            </div >

        )
    }
}

export default ItemCount