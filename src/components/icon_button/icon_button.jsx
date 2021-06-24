import React, { Component } from "react"
import "./icon_button.scss"

class IconButton extends Component {


    constructor(props) {
        super(props)
        this.props = props
    }

    style = {
        width: this.props.width,
        height: this.props.height,
        backgroundColor: this.props.backgroundColor,
        borderRadius: this.props.borderRadius,
        padding: this.props.padding,
        border: this.props.isBorder == true ? "1px solid black" : null,
        color: this.props.color,
        margin: this.props.margin,
    }
    parentMini = {
        width: "17px",
        height: "17px",
        backgroundColor: "white",
        borderRadius: "0",
        padding: "0.2rem",
        border: "1px solid black",
    }

    childMiniStyle = {
        width: "17px",
        height: "17px",
    }

    render() {
        const { onclick, cartCount } = this.props

        return (
            <div className="parent" onClick={onclick === undefined ? null : () => onclick()}>

                {this.props.type === "dropdown" ? <div className={"currency"} style={this.props.isMini ? this.parentMini : this.style} >
                    {this.props.imgSrc}</div> : null}


                {this.props.type === "notifier" ? <div className={cartCount === 0 ? "state setState" : "state"} data-value={cartCount} style={this.props.isMini ? this.parentMini : this.style}>
                    <img style={this.props.isMini ? this.childMiniStyle : null} className src={this.props.imgSrc} alt="" /></div> : null}


                {this.props.type === "normal" ? <div className="normal" style={this.props.isMini ? this.parentMini : this.style}>
                    <img style={this.props.isMini ? this.childMiniStyle : null} className src={this.props.imgSrc} alt="" /></div> : null}


                {this.props.type === "text" ? <div className="text" style={this.props.isMini ? this.parentMini : this.style}><p>{this.props.title}</p> </div> : null}

            </div>
        )
    }
}
export default IconButton