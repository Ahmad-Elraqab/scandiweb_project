import React, { Component } from "react"
import ProductDescriptionZoom from "../../components/product_description_zoom/product_description_zoom"
import AddToCart from "../../components/add_to_cart/add_to_cart"
import "./product_description.scss"
import { setNextRoute } from "../../redux/category/category_action"
import { connect } from "react-redux";

class ProductDescription extends Component {


    constructor() {
        super()
        this.state = {}
    }

    render() {

        const { selectedProduct, setNextRoute } = this.props

        setNextRoute(this.props.match.params.name)

        return (
            < div className="product_description" >
                <ProductDescriptionZoom data={selectedProduct} />
                <AddToCart data={selectedProduct} />
            </div >
        )
    }
}

const mapStateToProps = ({ categoryReducer }) => ({
    selectedProduct: categoryReducer.selectedProduct,
});

const mapDispatchToProps = (dispatch) => {

    return {
        setNextRoute: (value) => { dispatch(setNextRoute(value)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription)


