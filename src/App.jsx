import "./App.css";
import HeroSection from "./components/HeroSection";
import CakeWithCandles from "./components/CakeWithCandles";

function App() {

  const [birthdayPerson] = useState('Isaac')
  return (
    <div>
      <HeroSection />
      <CakeWithCandles />
    </div>
  );
}

export default App;
