import CartActionType from "./cart_action_type"
import { GET_CURRENCIES } from "../../graphQl/currency/query"
import client from "../../graphQl/server"

export const addToCart = (products) => ({

    type: CartActionType.ADD_TO_CART,
    products,

})
export const deleteFromCart = (products) => ({

    type: CartActionType.DELETE_FROM_CART,
    products,

})
export const updateCart = (attribute, value, products) => ({

    type: CartActionType.UPDATE_CART,
    attribute,
    value,
    products

})
export const updateCartItem = (id, oper) => ({

    type: CartActionType.UPDATE_CART_COUNT,
    id,
    oper

})
export const loadCurrency = (data) => ({

    type: CartActionType.LOAD_CURRENCIES,
    data

})

export const changeCurrency = (data) => ({
    
    type: CartActionType.CHANGE_CURRENCY,
    data

})
export const fetchCurrencies = () => {

    return (dispatch) => {
        client
            .query({
                query: GET_CURRENCIES
            }).then(result => {

                dispatch(loadCurrency(result.data))
            })
    }
}