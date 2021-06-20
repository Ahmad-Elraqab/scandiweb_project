import CategoryActionType from "./category_action_type"
import { getData } from "../../graphQl/Category/category"
import { GET_PORDUCTS } from "../../graphQl/Category/category_queries"
import client from "../../graphQl/server"

export const loadPoducts = (products, categories) => ({

    type: CategoryActionType.LOAD_PRODUCTS,
    products,
    categories,

})

export const setRoute = (route) => ({

    type: CategoryActionType.SET_ROUTE,
    route,

})

export const getProductDescription = () => ({

    type: CategoryActionType.GET_PRIDUCT_LIST,

})

export const fetchProducts = () => {

    return (dispatch) => {
        client
            .query({
                query: GET_PORDUCTS
            }).then(result => {

                dispatch(setCategoryAndProducts(result.data))
            })
    }
}

export const setCategoryAndProducts = (data) => {

    return (dispatch) => {
        var categories = []
        var products = new Map();

        data.category.products.map((e) => {

            products.has(e.category) ? products.get(e.category).push(e) : products.set(e.category, [e]) && categories.push(e.category)

        })

        dispatch(loadPoducts(products, categories))
    }

}

export const getCategoryProducts = (value) => ({

    type: CategoryActionType.getCategoryProducts,
    data: value

})
