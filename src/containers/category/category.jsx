import React, { Component } from "react"
import CategoryCard from "../../components/category_card/category_card"
import "./category.scss"
import { getProductDescription } from "../../redux/category/category_action"
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart_action"

class Category extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { currentCategory, products, addToCart } = this.props
        return (
            <div>

                <div className="header">

                    <p className={"innerText"}>{currentCategory.toUpperCase()}</p>

                    {/* <Pagination /> */}

                </div>

                <div className="products_grid">

                    {
                        products.length !== 0 ? products.get(currentCategory).map((e) => (

                            <CategoryCard data={e} addToCart={addToCart} />
                        )) : <h1>No products are available</h1>
                        // < CategoryCard />
                    }

                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ categoryReducer, cartReducer }) => ({
    loading: categoryReducer.loading,
    currentCategory: categoryReducer.currentCategory,
    products: categoryReducer.products,
});

const mapDispatchToProps = (dispatch) => {

    return {
        getProductDescription: () => { dispatch(getProductDescription()) },
        addToCart: (value) => { dispatch(addToCart(value)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Category)

