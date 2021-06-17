import React, { Component } from "react"
import IconButton from "../../components/icon_button/icon_button"
import cartIcon from "../../assets/icons/EmptyCart.svg"
import "./category_card.scss"
import ImgScr from "../../assets/icons/Image1.svg"


class CategoryCard extends Component {

    constructor({ props }) {
        super(props)
        this.state = props;
    }

    render() {

        return (
            <div className="product">
                <div className="img_div" data-title={"Apollo Running Short"} data-price={"$50.00"}>
                    <img className={"background_img"} src={ImgScr} alt="" />
                    <div className="btn">
                        <IconButton imgSrc={cartIcon} width={"25px"} height={"25px"} isDropDown={false} padding={"1rem"} backgroundColor={"#5ECE7B"} type="normal" borderRadius={"60%"} />
                    </div>
                </div>
            </div >
        )
    }

}

export default CategoryCard