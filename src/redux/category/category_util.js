export const loadPoductsUtil = (prevState, data) => {

    return [...prevState, { products: data }]
}