import React, { Component } from "react"
import "./product_description_zoom.scss"

class ProductDescriptionZoom extends Component {

    constructor() {
        super()
        this.state = {
            currentIndex: 0
        }
    }

    setIndex(data, e) {
        const index = data.gallery.indexOf(e)
        this.setState({ currentIndex: index })
    }

    render() {
        const { data } = this.props

        return (
            < div className={"product_view"} >
                {data !== null ? data.gallery.length > 2
                    ? <ul>
                        {
                            data ? data.gallery.map(e =>
                                data.gallery.indexOf(e) !== this.state.currentIndex ? <li onClick={() => this.setIndex(data, e)}> <img src={e} alt="" /></li> : null
                            ) : <h5>Loading data</h5>
                        }
                    </ul>
                    : null : null
                }
                <div className={data !== null ? data.inStock ? "img_view" : "img_view outStock" : null} data-out-stock="OUT OF STOCK">
                    <img src={data ? data.gallery[this.state.currentIndex] : null} alt="" />
                </div>
            </div >
        )
    }
}
export default ProductDescriptionZoom