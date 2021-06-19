import { combineReducers } from "redux";
import categoryReducer from "./category/category_reducer"

export default combineReducers({
  categoryReducer: categoryReducer,
});
