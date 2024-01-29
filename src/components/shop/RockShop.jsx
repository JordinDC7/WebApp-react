import { React, useEffect, useState } from "react";
import rockShowService from "../../service/shop";
import NavBar from "../landing/NavBar";
import "../../css/rockshop.css";
import Footer from "../landing/Footer";
import GridLayout from "./GridLayout";

function RockShop() {
  const [rockState, setRockState] = useState([]);
  console.log("This is rockState:", rockState);

  useEffect(() => {
    rockShowService.getAll().then(onGetRocksSuccess).catch(onGetRocksError);
  }, []);

  const onGetRocksSuccess = (response) => {
    console.log(response.data.items);
    const data = response.data.items;

    setRockState((prevState) => {
      const oldState = { ...prevState };
      let newState = oldState;
      newState = { ...data };

      return newState;
    });
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
          <GridLayout rockState={rockState}></GridLayout>
        </div>
      </div>
      <div className="middle-section main-wrapper">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default RockShop;
