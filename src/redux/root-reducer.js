import { combineReducers } from "redux";
import categoryReducer from "./category/category_reducer"
import navigationReducer from "./navigation/navigation_reducer"

export default combineReducers({
  categoryReducer: categoryReducer,
  navigationReducer: navigationReducer,
});
