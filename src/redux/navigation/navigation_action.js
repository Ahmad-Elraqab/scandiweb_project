import NavigationActionType from "./navigation_action_type"
import client from "../../graphQl/server"

export const loadCurrency = () => ({

    type: NavigationActionType.GET_CURRENCY,

})

export const ChangeCurrency = (value) => ({

    type: NavigationActionType.GET_CURRENCY,

})

export const toggleCurrency = () => ({

    type: NavigationActionType.TOGGLE_CURRENCY,

})

export const toggleCart = () => ({

    type: NavigationActionType.TOGGLE_CART,

})
