import CartActionType from "./cart_action_type";
import { addToCartUtil, updateCartUtil, updateCartItemUtil, updateTotal } from "./cart_reducer_util";

const initState = {

    total: 0,
    cartItemCount: 0,
    products: [

    ]

}
const cartReducer = (state = initState, action) => {

    switch (action.type) {

        case CartActionType.ADD_TO_CART:
            {
                const newState = addToCartUtil(state, action)
                return updateTotal(newState)
            }
        case CartActionType.DELETE_FROM_CART:
            {
                return {

                    ...state,
                }
            }
        case CartActionType.UPDATE_CART:
            {
                return updateCartUtil(state, action)
            }
        case CartActionType.UPDATE_CART_COUNT:
            {
                const newState = updateCartItemUtil(state, action)
                return updateTotal(newState)
            }


    }
    return state;
}
export default cartReducer