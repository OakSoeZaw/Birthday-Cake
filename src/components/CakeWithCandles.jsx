import { useState } from "react";

function CakeWithCandles({ age = 22, name = "Isaac Chong" }) {
  const [candlesLit, setCandlesLit] = useState(Array(age).fill(true));
  const [showWishMessage, setShowWishMessage] = useState(false);

  //handles blowing out a single candle
  const blowCandle = (index) => {
    return;
  };
  return (
    <div className="simple-cake">
      <h2>🎂 Birthday Cake for {name} 🎂</h2>
      {/*Cake  */}
      <div className="cake">
        <div className="cake-layer bottom"></div>
        <div className="cake-layer middle"></div>
        <div className="cake-layer top"></div>

        <div className="frosting">
          <div className="frosting-drip"></div>
          <div className="frosting-drip"></div>
          <div className="frosting-drip"></div>
        </div>
      </div>
    </div>
  );
}
