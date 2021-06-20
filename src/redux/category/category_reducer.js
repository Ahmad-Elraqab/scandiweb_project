import CategoryActionType from "./category_action_type";
import { loadPoductsUtil } from "./category_util";

const initState = {

    loading: false,
    currentCategory: "",
    currentPage: 1,
    selectedProduct: "",
    categories: [

    ],
    products: [

    ]

}
const categoryReducer = (state = initState, action) => {

    switch (action.type) {

        // fetching
        case CategoryActionType.LOAD_PRODUCTS:
            {
                return {
                    ...state,
                    loading: false,
                    products: action.products,
                    currentCategory: action.categories[0],
                    categories: action.categories
                }
            }
        case CategoryActionType.SET_ROUTE:
            {
                return {

                    ...state,
                    currentCategory: action.route
                }
            }
        case CategoryActionType.GET_PRIDUCT_LIST:
            {
                return {

                    ...state,
                    currentCategory: action.route
                }
            }
        case CategoryActionType.SELECTED_PRODUCT:
            {
                return {

                    ...state,
                    selectedProduct: state.products.get(state.currentCategory).filter(e => e.name === action.value)[0]
                }
            }

    }
    return state;
}
export default categoryReducer