import React from "react";
import Banner from "./Banner";
import Middle from "./Middle";
import Forms from "./Forms";
import Header from "./Header"
import Footer from "./Footer"

const Home = () => {
  return (
    <>
      <Header/>
      <Banner />
      <Middle />
      <Forms />
      <Footer/>
    </>
  );
};

export default Home;
