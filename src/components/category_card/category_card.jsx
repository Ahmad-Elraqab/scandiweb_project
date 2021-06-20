import React, { Component } from "react"
import IconButton from "../../components/icon_button/icon_button"
import cartIcon from "../../assets/icons/EmptyCart.svg"
import "./category_card.scss"


class CategoryCard extends Component {

    constructor(props) {
        super(props)
        this.state = {

        };
    }

    render() {
        const { data } = this.props
        console.log(data)
        return (
            <div className="product">
                <div className={"img_div " + (data.inStock == true ? "" : "outStock")} data-out-stock="OUT OF STOCK" >
                    <img className={"background_img"} src={data.gallery[0]} alt="" />
                    <div className="btn">
                        {data.inStock == true ?
                            <IconButton imgSrc={cartIcon} width={"25px"} height={"25px"} isDropDown={false} padding={"1rem"} backgroundColor={"#5ECE7B"} type="normal" borderRadius={"60%"} />
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