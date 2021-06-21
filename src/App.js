import './App.css';
import { Route, BrowserRouter } from "react-router-dom"
import Category from "../src/containers/category/category"
import ProductDescription from "../src/containers/product_description/product_description"
import Cart from "../src/containers/cart/cart"
import Template from "./components/template/template"

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Template>
          <Route path={"/cart"} component={Cart}></Route>
          <Route exact path={"/"} component={Category}></Route>
          <Route path={"/product_description/:name"} component={ProductDescription}></Route>
        </Template>
      </div>
    </BrowserRouter>


  );
}

export default App;
