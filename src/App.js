import About from "./components/About";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Main></Main>
      <About></About>
      <Services></Services>
      <Work></Work>
      <Footer></Footer>
    </div>
  );
}

export default App;
