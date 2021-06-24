import React, { Component } from "react"
import IconButton from "../../components/icon_button/icon_button"
import Plus from "../../assets/icons/plus.svg"
import Minus from "../../assets/icons/minus.svg"
import "./item_count.scss"

class ItemCount extends Component {


    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0
        }
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

    changePhoto = (length, type) => {

        var value = 0

        if (this.state.currentIndex === length && type === "next") {
            value = 0
        }
        else if (this.state.currentIndex === 0 && type === "before") {
            value = length
        } else if (type === "next") {
            value = this.state.currentIndex + 1
        } else {
            value = this.state.currentIndex - 1
        }

        this.setState({ currentIndex: value })
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
                    {!this.props.isMini ? data.gallery.length == 1 ? null :

                        [<div className="arrow-right" onClick={() => this.changePhoto(data.gallery.length - 1, "next")}></div>,
                        <div className="arrow-left" onClick={() => this.changePhoto(data.gallery.length - 1, "before")}></div>] : null}

                    <img style={this.props.isMini ? this.imgStyle : null} src={data ? data.gallery[this.state.currentIndex] : null} alt="" />

                </div>

            </div >

        )
    }
}

export default ItemCount