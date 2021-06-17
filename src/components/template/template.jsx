import React, { Component } from "react"
import Navigation from "../navigation/navigation"
import "./template.scss"

class Template extends Component {

    constructor({ props }) {
        super(props)
        this.state = props
    }


    render() {
        return (
            <div className="template">
                <div>
                    <Navigation />
                </div>

                {this.props.children}

            </div>
        )
    }

}

export default Template