import React, { Component } from "react"
import "./product_size.scss"
import ntc from "ntcjs"


class ProductSize extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }
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


    render() {

        const { data, onClick, state } = this.props

        return (
            <div>
                {

                    data ? [

                        <p style={{ textAlign: "start", fontWeight: 700, fontSize: 18 }}>{data.name}</p>,

                        <div className="size_list" style={this.props.isMini ? { width: "150%", justifyContent: "start" } : null}>
                            {
                                data ? data.items.map((g) => (
                                    <div style={this.props.isMini ? this.sizeMini : null}
                                        className={state.activeAttributes.get(data.name) === g.value ? "size selected" : 'size'}
                                        onClick={() => onClick(data.name, g.value, state)}>{data.name === "Color" ? ntc.name(g.value)[1] : g.value}</div>
                                )) : null
                            }
                        </div >
                    ] : null
                }
            </div>
        )
    }
}

export default ProductSize