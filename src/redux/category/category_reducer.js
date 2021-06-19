import CategoryActionType from "./category_action_type";
import { loadPoductsUtil } from "./category_util";

const initState = {

    loading: false,
    currentCategory: "",
    currentPage: 1,
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
        case CategoryActionType.GET_NAV_CATEGORIES:
            {

                return {

                    ...state,
                    loading: true
                }
            }
        case CategoryActionType.GET_PRODUCTS_BY_CATEGORY:
            {

                return {

                    ...state,
                    loading: true
                }
            }

    }
    return state;
}
export default categoryReducer