import NavMenu from "./NavMenu/NavMenu";
import Header from "./Header/Header";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Portfolio from "./Portfolio/Portfolio";
import Skills from "./Skills/Skills";
import Certificate from "./Certificate/Certificate";

export default function AppLayout() {

  return(
    <>
      <NavMenu />
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Certificate/>
      <Footer />
    </>
    
  )
}