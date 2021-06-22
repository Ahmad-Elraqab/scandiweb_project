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


export const addToCartUtil = (state, action) => {
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

export const updateCartUtil = (state, action) => {

    const product = state.products.filter(e => {
        const value = compareMaps(e.activeAttributes, action.products.activeAttributes)
        if (e.name === action.products.name && value === true) { return e }
    })

    product[0].activeAttributes.set(action.attribute, action.value)

    console.log(product)
    const index = state.products.map(e => e.name).indexOf(product.name)
    const list = state.products
    list.splice(index, 1, product[0])
    // console.log(list)

    return {
        ...state,
        products: [...list]
    }
}