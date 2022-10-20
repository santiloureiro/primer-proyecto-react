import NavBar from "./components/containers/NavBar";
import ItemListContainer from "./components/containers/ItemListContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/containers/Home";
import Cart from "./components/containers/Cart";
import CartContext from "./components/providers/CartContext";

function App() {
  return (
    <div className="bg-zinc-200">
      <BrowserRouter>
      <NavBar></NavBar>
      <CartContext>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/products" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/category/:categoriaId" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/item/:productoId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route exact path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      </CartContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
