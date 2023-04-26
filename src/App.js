import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Header />
      <section className="mainSection">
        <Navbar />
        <Main />
      </section>
      <Footer />
    </>
  );
};

export default App;
