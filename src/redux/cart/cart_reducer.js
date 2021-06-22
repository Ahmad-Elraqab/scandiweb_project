import CartActionType from "./cart_action_type";
import { addToCartUtil, updateCartUtil, updateCartItemUtil } from "./cart_reducer_util";

const initState = {

    products: [

    ]

}
const cartReducer = (state = initState, action) => {

    switch (action.type) {

        case CartActionType.ADD_TO_CART:
            {
                return addToCartUtil(state, action)
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
                return updateCartItemUtil(state, action)
            }


    }
    return state;
}
export default cartReducer