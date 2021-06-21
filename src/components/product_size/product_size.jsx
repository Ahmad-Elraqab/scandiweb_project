import React, { Component } from "react"
import "./product_size.scss"
import ntc from "ntcjs"


class ProductSize extends Component {


    constructor(props) {
        super(props)
        this.state = {
            activeAttributes: new Map()
        }
        this.updateDate = this.updateDate.bind(this)
    }

    sizeMini = {
        width: "17px",
        height: "17px",
        border: "1px solid black",
        padding: "0.2rem",
        fontSize: "12px",
        alignContent: "space-between",
        marginRight: "0.5rem",
        fontWeight: "400",
        display: "flex",
        flexDirection: "row",
    }

    updateDate = (value) => {
        this.setState(
            [
                ...this.state.activeAttributes,
                this.state.activeAttributes.set(value, '')
            ])
    }

    onClick = (attribute, value) => {
        this.setState(
            [
                ...this.state.activeAttributes,
                this.state.activeAttributes.set(attribute, value)
            ])

    }
    render() {

        const { data } = this.props

        return (
            <div>
                {data ? data.map((e) =>
                (

                    [
                        this.state.activeAttributes.has(e.name) ? <h1></h1> : this.updateDate(e.name),

                        <p style={{ textAlign: "start", fontWeight: 700, fontSize: 18 }}>{e.name}</p>,

                        <div className="size_list" style={this.props.isMini ? { width: "150%", justifyContent: "start" } : null}>
                            {
                                e.items.map((g) => (
                                    <div style={this.props.isMini ? this.sizeMini : null}
                                        className={this.state.activeAttributes.get(e.name) === g.value ? "size selected" : 'size'}
                                        onClick={() => this.onClick(e.name, g.value)}>{e.name === "Color" ? ntc.name(g.value)[1] : g.value}</div>
                                    // selected
                                ))
                            }
                        </div >
                    ]
                )

                ) : <h5>Loading data</h5>}
            </div>
        )
    }
}

export default ProductSize