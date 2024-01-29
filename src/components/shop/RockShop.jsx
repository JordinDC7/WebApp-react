import { React, useEffect } from "react";
import rockShowService from "../../service/shop";
import NavBar from "../landing/NavBar";
import "../../css/rockshop.css";
import Footer from "../landing/Footer";
import GridLayout from "./GridLayout";

function RockShop() {
  useEffect(() => {
    rockShowService.getAll().then(onGetRocksSuccess).catch(onGetRocksError);
  }, []);

  const onGetRocksSuccess = (response) => {
    console.log(response.data.items);
  };
  const onGetRocksError = (error) => {
    console.error(error);
  };

  return (
    <div className="top-section">
      <div className="container">
        <div>
          <NavBar></NavBar>
        </div>
        <title>Rock Show Shop</title>
        <div className="rock-shop-head">
          <h1>Shop Rocks</h1>
          <GridLayout></GridLayout>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default RockShop;
