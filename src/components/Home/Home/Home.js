import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import RecentProduct from "../RecentProduct/RecentProduct";
import Footer from "../Footer/Footer";
import Review from "../../Services/Review/Review";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#12232E", color: "white" }}>
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <RecentProduct></RecentProduct>
      <Review></Review>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
