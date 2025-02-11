import About from "./components/About";
import BlogClient from "./components/BlogClient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Offer from "./components/Offer";
import ShopSection from "./components/ShopSection";
import SliderSection from "./components/SliderSection";

const { Component } = require("react");

class App extends Component {
  render() {
    return <>

      <Header/>
      <SliderSection/>
      <ShopSection/>
      <About/>
      <Offer/>
      <BlogClient/>
      <InfoSection/>
      <Footer/>
    </>
  }
}

export default App;