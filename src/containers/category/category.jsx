import React, { Component } from "react"
import CategoryCard from "../../components/category_card/category_card"
import Pagination from "../../components/pagination/pagination"
import "./category.scss"
import { getProductDescription } from "../../redux/category/category_action"
import { connect } from "react-redux";

class Category extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { currentCategory, products } = this.props
        return (
            <div>

                <div className="header">

                    <p className={"innerText"}>{currentCategory.toUpperCase()}</p>

                    <Pagination />

                </div>

                <div className="products_grid">

                    {
                        products.length !== 0 ? products.get(currentCategory).map((e) => (

                            <CategoryCard data={e} />
                        )) : <h1>No products are available</h1>
                        // < CategoryCard />
                    }

                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ categoryReducer }) => ({
    loading: categoryReducer.loading,
    currentCategory: categoryReducer.currentCategory,
    products: categoryReducer.products,
});

const mapDispatchToProps = (dispatch) => {

    return {
        getProductDescription: () => { dispatch(getProductDescription()) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Category)

