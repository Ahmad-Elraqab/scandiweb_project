import React, { Component } from "react"
import Navigation from "../navigation/navigation"
import Notification from "../notification/notification"
import { fetchProducts } from "../../redux/category/category_action"
import { connect } from "react-redux";

import "./template.scss"

class Template extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            currentCategory: []
        }
    }


    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        // const { categories, currentCategory } = this.props
        return (
            <div className="template">
                {console.log(this.props.categories)}
                <div>
                    <Navigation categories={categories} currentCategory={currentCategory} />
                </div>


                {this.props.children}
                <div className="notification">
                    <Notification />
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({ categoryReducer }) => ({
    categories: categoryReducer.categories,
    currentCategory: categoryReducer.currentCategory,

});

const mapDispatchToProps = (dispatch) => {

    return {
        fetchProducts: () => { dispatch(fetchProducts()) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Template)

