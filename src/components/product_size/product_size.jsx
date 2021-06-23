import React, { Component } from "react"
import "./product_size.scss"
import ntc from "ntcjs"


class ProductSize extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        const { data, onClick, state } = this.props

        return (

            <div className={this.props.isMini ? "miniList" : "list"}>
                {
                    data ? [

                        this.props.isMini ? null : <p style={{ textAlign: "start", fontWeight: 700, fontSize: 18 }}>{data.name}</p>,

                        <div className="size_list">
                            {
                                data ? data.items.map((g) => (
                                    <div className={
                                        this.props.isMini ? (state.activeAttributes.get(data.name) === g.value ? "sizeMini selected" : 'sizeMini') :
                                            (state.activeAttributes.get(data.name) === g.value ? "size selected" : 'size')
                                    }
                                        onClick={() => onClick(data.name, g.value, state)}>{g.displayValue}</div>
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