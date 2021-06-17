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
    }

    render() {
        return (
            <div className="parent" onclick={() => this.props.onclick()}>

                {this.props.type === "dropdown" ? <div className={"currency"} style={this.style} ><img src={this.props.imgSrc} alt="" /></div> : null}
                {/* setCurrency add this class when the mini cart is opened */}
                {this.props.type === "notifier" ? <div className="state" data-value={"2"} style={this.style}><img className src={this.props.imgSrc} alt="" /></div> : null}
                {/* setState add this class when the value of cart is 0 */}
                {this.props.type === "normal" ? <div className="normal" style={this.style}><img className src={this.props.imgSrc} alt="" /></div> : null}

                {this.props.type === "text" ? <div className="text" style={this.style}><p>{this.props.title}</p> </div> : null}

            </div>
        )
    }
}
export default IconButton