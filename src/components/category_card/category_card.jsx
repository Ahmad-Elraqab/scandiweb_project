import React, { Component } from "react"
import IconButton from "../../components/icon_button/icon_button"
import cartIcon from "../../assets/icons/EmptyCart.svg"
import "./category_card.scss"
import { Link } from "react-router-dom";
import shorid from "shortid"

class CategoryCard extends Component {

    constructor(props) {
        super(props)
        this.state = {

        };
    }
    handleClick(product, callback) {

        const activeAttributes = new Map()

        product.attributes.forEach((e) => {
            activeAttributes.set(e.name, "")
        })
        const data = { ...product, activeAttributes, "count": 1, "id": shorid.generate() }

        callback(data)
    }

    render() {
        const { data, addToCart } = this.props
        return (
            <div className="product">
                <div className={"img_div " + (data.inStock == true ? "" : "outStock")} data-out-stock="OUT OF STOCK" >
                    <Link to={"/product_description/" + data.name} >
                        <img className={"background_img"} src={data.gallery[0]} alt="" />
                    </Link>
                    <div className="btn" onClick={() => this.handleClick(data, addToCart)}>
                        {data.inStock == true ?
                            <IconButton imgSrc={cartIcon} width={"25px"} height={"25px"} isDropDown={false}
                                padding={"1rem"} backgroundColor={"#5ECE7B"} type="normal" borderRadius={"60%"} onclick={() => null} />
                            : null
                        }
                    </div>
                </div>
                <div className={"description"}>
                    <p className='p'>{data.name}</p>
                    <p><b>{"$" + data.prices[0].amount}</b></p>
                    {/* later display by current currency */}
                </div>
            </div >
        )
    }

}

export default CategoryCard