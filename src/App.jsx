import "./App.css";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import CakeWithCandles from "./components/CakeWithCandles";

function App() {
  const [birthdayPerson] = useState("Rodisha");
  const [birthdayAge] = useState(21);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleTriggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleAllCandlesBlown = () => {
    console.log("All candles blown! Making a wish!");
    alert(
      `🎉 ${birthdayPerson} made a wish on their ${birthdayAge}th birthday!`,
    );
  };
  return (
    <div className="App">
      <HeroSection
        userName={birthdayPerson}
        triggerConfetti={handleTriggerConfetti}
      />
      <CakeWithCandles
        age={birthdayAge}
        name={birthdayPerson}
        onAllCandlesBlown={handleAllCandlesBlown}
      />
    </div>
  );
}

export default App;
