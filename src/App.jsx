import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/ItemListContainer" element={<ItemListContainer></ItemListContainer>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
