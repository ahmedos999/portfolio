import About from "./components/About";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Main></Main>
      <About></About>
      <Services></Services>
    </div>
  );
}

export default App;
