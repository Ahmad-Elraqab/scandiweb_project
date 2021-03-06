import NavigationActionType from "./navigation_action_type";

const initState = {

    isCurrencyOpen: false,
    isCartOpen: false,
    currenciesList: []

}
const navigationReducer = (state = initState, action) => {

    switch (action.type) {

        case NavigationActionType.TOGGLE_CURRENCY:
            {
                return {
                    ...state,
                    isCurrencyOpen: !state.isCurrencyOpen,
                    isCartOpen: false
                }
            }
        case NavigationActionType.TOGGLE_CART:
            {
                return {
                    ...state,
                    isCartOpen: !state.isCartOpen,
                    isCurrencyOpen: false
                }
            }

    }
    return state;
}
export default navigationReducer