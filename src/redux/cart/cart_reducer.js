import CartActionType from "./cart_action_type";

const initState = {

    products: [

    ]

}
const cartReducer = (state = initState, action) => {

    switch (action.type) {

        // fetching
        case CartActionType.ADD_TO_CART:
            {
                function compareMaps(map1, map2) {
                    var testVal;

                    for (var [key, val] of map1) {
                        testVal = map2.get(key);
                        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
                            return false;
                        }
                    }
                    return true;
                }

                const product = state.products.filter(e => {
                    const value = compareMaps(e.activeAttributes, action.products.activeAttributes)
                    if (e.name === action.products.name && value === true) { return e }
                })
                if (product.length === 0) {
                    return {
                        ...state,
                        products: [...state.products, action.products]
                    }

                } else {
                    const index = state.products.map(e => e.name).indexOf(action.products.name)
                    const list = state.products
                    product[0].count += 1
                    list.splice(index, 1, product[0])

                    return {
                        ...state,
                        products: [...list]
                    }
                }


            }
        case CartActionType.DELETE_FROM_CART:
            {
                return {

                    ...state,
                }
            }
        case CartActionType.UPDATE_CART:
            {
                const product = state.products.filter(e => e.name === action.name)
                product[0].activeAttributes.set(action.attribute, action.value)

                const index = state.products.map(e => e.name).indexOf(action.name)
                const list = state.products
                list.splice(index, 1, product[0])
                // console.log(list)

                return {
                    ...state,
                    products: [...list]
                }
            }


    }
    return state;
}
export default cartReducer