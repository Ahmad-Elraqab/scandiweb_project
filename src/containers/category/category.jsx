import React, { Component } from "react"
import Template from "../../components/template/template"
import CategoryCard from "../../components/category_card/category_card"
import Pagination from "../../components/pagination/pagination"
import "./category.scss"

class Category extends Component {

    constructor(props) {
        super(props)
        this.state = props
    }

    render() {
        return (
            <Template>

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

            </Template>
        );
    }
}

export default Category