import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <>
      <header className="container font-poppins">
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="Holis" />
      </main>
    </>
  );
}

export default App;
