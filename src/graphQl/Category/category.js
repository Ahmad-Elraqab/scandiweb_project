import { GET_PORDUCTS } from "./category_queries"
import client from "../server"
import { loadPoducts } from "../../redux/category/category_action"

export const getData = () => {

    return (dispatch) => {

        client
            .query({
                query: GET_PORDUCTS
            }).then(result => {

                dispatch(loadPoducts(result.data))
            }
            )
    }
}
