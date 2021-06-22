import CartActionType from "./cart_action_type"

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
