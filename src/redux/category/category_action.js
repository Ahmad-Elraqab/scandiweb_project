import CategoryActionType from "./category_action_type"
import { getData } from "../../graphQl/Category/category"
import { GET_PORDUCTS } from "../../graphQl/Category/category_queries"
import client from "../../graphQl/server"

// export const validatingUserFailed = () => ({
//     type: UserActionTypes.VALID_USER_FAILED
// })
// export const validatingUserSucess = (user) => ({

//     type: UserActionTypes.VALID_USER_SUCESS,
//     user
// })

export const loadPoducts = (data) => ({

    type: CategoryActionType.LOAD_PRODUCTS,
    data: data

})

export const fetchProducts = () => {

    return (dispatch) => {
        client
            .query({
                query: GET_PORDUCTS
            }).then(result => {

                console.log(result.data)

                dispatch(loadPoducts(result.data))
            })
    }
}

export const getCategories = () => ({

    type: CategoryActionType.getCategories

})
export const getCategoryProducts = (value) => ({

    type: CategoryActionType.getCategoryProducts,
    data: value

})
