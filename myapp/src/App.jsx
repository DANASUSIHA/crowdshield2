import "./App.css";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import HelpForm from "./component/HelpForm";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HelpForm />
      <Footer />
    </>
  );
}

export default App;