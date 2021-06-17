import React, { Component } from "react"
import IconButton from "../../components/icon_button/icon_button"
import leftArrow from "../../assets/icons/chevron-left.svg"
import rightArrow from "../../assets/icons/chevron-right.svg"
import "./pagination.scss"


class Pagination extends Component {

    constructor({ props }) {
        super(props)
        this.state = props
    }

    render() {
        return (
            <div className="pagination">

                <IconButton imgSrc={leftArrow} width={"25px"} height={"25px"} isDropDown={false} padding={"0.5rem"} backgroundColor={"#5ECE7B"} type="normal" borderRadius={"60%"} />
                <div className="value">
                    1
                </div>
                <IconButton imgSrc={rightArrow} width={"25px"} height={"25px"} isDropDown={false} padding={"0.5rem"} backgroundColor={"#5ECE7B"} type="normal" borderRadius={"60%"} />

            </div>
        )
    }
}
export default Pagination