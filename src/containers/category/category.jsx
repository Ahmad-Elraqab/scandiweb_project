import React, { Component } from "react"
import CategoryCard from "../../components/category_card/category_card"
import Pagination from "../../components/pagination/pagination"
import "./category.scss"
import { fetchProducts } from "../../redux/category/category_action"
import { connect } from "react-redux";

class Category extends Component {

    constructor(props) {
        super(props)
        this.state = props
    }

    componentDidMount() {


    }
    render() {
        return (
            <div>

                <div className="header">

                    <p className={"innerText"}>Category name</p>

                    <Pagination />

                </div>

                <div className="products_grid">

                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />

                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ categoryReducer }) => ({
    loading: categoryReducer.loading,
    products: categoryReducer.products,
});

const mapDispatchToProps = (dispatch) => {

    return {
        // fetchProducts: () => { dispatch(fetchProducts()) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Category)

