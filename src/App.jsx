import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import CartContext from "./components/CartContext";

function App() {
  return (
    <div className="bg-zinc-200">
      <BrowserRouter>
      <NavBar></NavBar>
      <CartContext>
      <Routes>
        <Route exact path="/home" element={<Home></Home>}></Route>
        <Route exact path="/" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/category/:categoriaId" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/item/:productoId" element={
            <ItemDetailContainer></ItemDetailContainer>
        }></Route>
        <Route exact path="/cart" element={
              <Cart></Cart>
        }></Route>
      </Routes>
      </CartContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
