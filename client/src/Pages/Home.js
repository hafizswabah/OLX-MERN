import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';


function Home(props) {
  const [products, setProducts]=useState([])
  useEffect(()=>{
    (async function(){
        let {data}= await axios.get("http://localhost:7777/products");
        setProducts(data.products)
        console.log("hai")
    })()
  },[])
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts products={products}/>
      <Footer />
    </div>
  );
}

export default Home;
 
