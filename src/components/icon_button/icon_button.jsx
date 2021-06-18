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
        return (
            <div className="parent" onclick={() => this.props.onclick()}>

                {this.props.type === "dropdown" ? <div className={"currency"} style={this.props.isMini ? this.parentMini : this.style} >
                    <img style={this.props.isMini ? this.childMiniStyle : null} src={this.props.imgSrc} alt="" /></div> : null}
                {/* setCurrency add this class when the mini cart is opened */}
                {this.props.type === "notifier" ? <div className="state" data-value={"2"} style={this.props.isMini ? this.parentMini : this.style}>
                    <img style={this.props.isMini ? this.childMiniStyle : null} className src={this.props.imgSrc} alt="" /></div> : null}
                {/* setState add this class when the value of cart is 0 */}
                {this.props.type === "normal" ? <div className="normal" style={this.props.isMini ? this.parentMini : this.style}>
                    <img style={this.props.isMini ? this.childMiniStyle : null} className src={this.props.imgSrc} alt="" /></div> : null}

                {this.props.type === "text" ? <div className="text" style={this.props.isMini ? this.parentMini : this.style}><p>{this.props.title}</p> </div> : null}

            </div>
        )
    }
}
export default IconButton