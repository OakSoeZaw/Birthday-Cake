import Confetti from "react-confetti";
import birthdaySong from "../assets/birthday-song.mp3";
import '../styles/HeroSection.css'
import { useState, useEffect } from "react";

function HeroSection({ userName = "Oak", triggerConfetti }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [audio] = useState(new Audio(birthdaySong));
  const BIRTHDAY_PERSON = "Isaac Chong";

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const handleCelebrateClick = () => {
    setIsAnimating(true);
    audio.currentTime = 0;
    audio.play().catch((e) => console.log("Audio play failed: ", e));

    if (triggerConfetti) {
      triggerConfetti();
    }
    alert(`🎂 Happy Birthday, ${BIRTHDAY_PERSON}! 🎉`);

    // Stop animation after 5 seconds
    setTimeout(() => setIsAnimating(false), 5000);
  };

  return (
    <section className="hero-section">
      {isAnimating && (
        <div className="confetti-container">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={200}
            gravity={0.1}
          />
        </div>
      )}

      <div className="hero-content">
        <div className="birthday-header">
          <h1 className="birthday-title">
            Happy Birthday,{" "}
            <span className="highlight-name">{BIRTHDAY_PERSON}</span>
          </h1>
          <div className="birthday-info">
            <p className="birthday-date">Celebrating on: January 28th </p>
            <p className="birthday-age">Turning 21 today!</p>
          </div>
        </div>
        <p className="birthday-subtitle">
          Wishing you a day filled with happiness, joy, and wonderful surprises!
        </p>
        <div className="hero-message">
          <div className="message-bubble">
            <p className="wish-text">
              May all your dream come true ane this year bring you endless
              reason to smile!
            </p>
            <div className="decoration">
              <span className="emoji">✨</span>
              <span className="emoji">🎁</span>
              <span className="emoji">🎈</span>
            </div>
          </div>
        </div>
        <div className="celebration-controls">
          <button
            onClick={handleCelebrateClick}
            className="celebrate-btn"
            disabled={isAnimating}
          >
            <span className="btn-icon">🎉</span>
            <span className="btn-text">
              {isAnimating ? "Celebrating!" : "Start Celebrating"}
            </span>
            <span className="btn-icon">🎂</span>
          </button>
        </div>
        <div className="animated-elements">
          <div className={`floating-balloon ${isAnimating ? "bounce" : ""}`}>
            🎈
          </div>
          <div className={`floating-cake ${isAnimating ? "bounce" : ""}`}>
            🎂
          </div>
          <div className={`floating-gift ${isAnimating ? "bounce" : ""}`}>
            🎁
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
