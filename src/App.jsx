import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Products from "./components/products/Products";
import Product from "./components/product/Product";
import { FaShoppingCart } from "react-icons/fa";
import GameGeek from "../src/assets/GameGeek.svg";
import Cart from "./components/Cart";
import List from "./components/List";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import Footer from "./components/footercom/Footer";





function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Router>
        <List />
        <header className="bg-green-800">
          <div className="flex justify-between container mx-auto items-center py-[40px]">
            <p>
              <img src={GameGeek} alt="" />
            </p>

            <nav>
              <ul className="flex text-white gap-[40px] font-bold">
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "activeLink" : "")}
                    to="/"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink>Categories</NavLink>
                </li>
                <li>
                  <NavLink>Brands</NavLink>
                </li>
                <li>
                  <NavLink>Whats new</NavLink>
                </li>
                <li>
                  <NavLink>Sales</NavLink>
                </li>
                <li>
                  <NavLink>Help</NavLink>
                </li>
                <li>
                  <NavLink>About</NavLink>
                </li>
              </ul>
            </nav>
            <div className="flex gap-[15px]">
              <p className="text-white">
                <AiOutlineUser />
              </p>
              <p className="text-white">
                <AiOutlineSearch />
              </p>
              <NavLink to="/cart">
                {cart.length > 0 && (
                  <span className="cart-count absolute text-red-500 ml-6 mt-[-15px] font-bold ">{cart.length}</span>
                )}
                <div className="text-white">
                  <FaShoppingCart />
                </div>
              </NavLink>
            </div>
          </div>
      
        </header>
        
        <Routes>
          <Route
            path="/"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart products={cart} />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
