import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      
      {/* Hero section as Home */}
      <section id="home">
        <Hero handleOrderPopup={handleOrderPopup} />
      </section>
      
      {/* Products section */}
      <section id="childrens-clothing">
        <Products />
      </section>

      {/* Top Products section */}
      <section id="services">
        <TopProducts handleOrderPopup={handleOrderPopup} />
      </section>

      {/* Banner */}
      <section id="banner">
        <Banner />
      </section>

      {/* Subscribe */}
      <section id="subscribe">
        <Subscribe />
      </section>

      {/* Repeated Products? */}
      <section id="mens-clothing">
        <Products />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Footer */}
      <Footer />

      {/* Popup */}
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
