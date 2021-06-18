import React, { Component } from "react"
import Navigation from "../navigation/navigation"
import Notification from "../notification/notification"

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
                <div className="notification">
                    <Notification />
                </div>
            </div>
        )
    }

}

export default Template