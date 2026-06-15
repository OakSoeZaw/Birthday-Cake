import { useState } from "react";
import "../styles/CakeWithCandles.css";

function CakeWithCandles({ age = 21, name = "Rodisha" }) {
  const [candlesLit, setCandlesLit] = useState(Array(4).fill(true));
  const [showWishMessage, setShowWishMessage] = useState(false);

  //handles blowing out a single candle
  const blowCandle = (index) => {
    if (!candlesLit[index]) return;

    const newCandles = [...candlesLit];
    newCandles[index] = false;
    setCandlesLit(newCandles);

    const allBlown = newCandles.every((candle) => !candle);
    if (allBlown) {
      setShowWishMessage(true);
      setTimeout(() => setShowWishMessage(false), 3000);
    }
  };
  const blowAllCandles = () => {
    setCandlesLit(Array(4).fill(false));
    setShowWishMessage(true);
    setTimeout(() => setShowWishMessage(false), 3000);
  };
  const resetCandles = () => {
    setCandlesLit(Array(4).fill(true));
    setShowWishMessage(false);
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

        <div className="candles">
          {candlesLit.map((isLit, index) => (
            <div
              key={index}
              className="candle-container"
              onClick={() => blowCandle(index)}
            >
              <div className="candle">
                {isLit && <div className="flame"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showWishMessage && (
        <div className="wish-popup">
          <h3>✨ Make a Wish! ✨</h3>
          <p>
            Happy {age}th Birthday, {name}
          </p>
        </div>
      )}

      <div className="controls">
        <button onClick={blowAllCandles} className="btn blow-btn">
          Blow All Candles
        </button>
        <button onClick={resetCandles} className="btn reset-btn">
          Relight Candles
        </button>
      </div>

      <div className="counter">
        <p>
          Candles blown: {candlesLit.filter((candle) => !candle).length} / 4
        </p>
      </div>
    </div>
  );
}

export default CakeWithCandles;
