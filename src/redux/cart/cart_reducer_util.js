export const addToCartUtil = (state, action) => {
    state.cartItemCount += 1

    return {
        ...state,
        products: [...state.products, action.products]
    }

}
export const updateCartUtil = (state, action) => {

    action.products.activeAttributes.set(action.attribute, action.value)
    const index = state.products.map(e => e.id).indexOf(action.products.id)
    const list = state.products
    list.splice(index, 1, action.products)


    return {
        ...state,
        products: [...list]
    }
}

export const updateCartItemUtil = (state, action) => {

    const product = state.products.find(e => e.id === action.id)
    const index = state.products.map(e => e.id).indexOf(action.id)
    const list = state.products


    if (action.oper === "+") {
        product.count += 1
        state.cartItemCount += 1
    } else {
        if (product.count > 0) {
            product.count -= 1
            state.cartItemCount -= 1
            list.splice(index, 1, product)
        }
        if (product.count === 0) {

            list.splice(index, 1)
        }
    }

    return {
        ...state,
        products: [...list]
    }
}

export const updateTotal = (state) => {

    var total = 0.0
    state.products.forEach(e => {
        total += e.prices[0].amount * e.count
    });
    state.total = total

    console.log(total)
    return state
}