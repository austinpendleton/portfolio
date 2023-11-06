import Header from "./Header";
import Introduction from "./Introduction";
import About from "./About";
import Languages from "./Languages";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

import { useRef } from "react";
function App() {
  return (
    <>
      <Header />
      <Introduction />
      <About />
      <Languages />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
