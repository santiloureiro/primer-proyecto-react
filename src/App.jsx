import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/ItemListContainer" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/items/:id" element={<ItemListContainer></ItemListContainer>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
