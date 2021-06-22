import { combineReducers } from "redux";
import categoryReducer from "./category/category_reducer"
import navigationReducer from "./navigation/navigation_reducer"
import cartReducer from "./cart/cart_reducer"

export default combineReducers({
  categoryReducer: categoryReducer,
  navigationReducer: navigationReducer,
  cartReducer: cartReducer,
});
