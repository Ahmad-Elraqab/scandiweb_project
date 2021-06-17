import './App.css';
import { Route, Switch } from "react-router-dom"
import Category from "../src/containers/category/category"
import ProductDescription from "../src/containers/product_description/product_description"
import Cart from "../src/containers/cart/cart"

function App() {
  return (
    <div className="App">
      <Route path={"/"} component={Cart}></Route>
      {/* <Route path={"/"} component={Category}></Route> */}
      {/* <Route path={"/"} component={ProductDescription}></Route> */}

    </div>
  );
}

export default App;
