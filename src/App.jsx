import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart";
import Error from "./Error";

const App = () => {
  return  (
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/productlist" element={<ProductList/>} />
    <Route path="/product" element={<Product/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/register" element={<Register/>} />
    <Route components={<Error/>}/>
    </Routes>
  );
};

export default App;