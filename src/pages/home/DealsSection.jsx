import React, { useState, useEffect } from 'react';
import dealsImg from "../../assets/Desktop-Gamer.png";

const DealsSection = () => {
  // Set the deal expiry date (adjust as needed)
  const dealEndDate = new Date("2025-04-30T23:59:59").getTime(); // Example: April 30, 2025

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = dealEndDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <section className='section__container deals__container'>
      <div className='deals__image'>
        <img src={dealsImg} alt="Deals Banner" />
      </div>

      <div className='deals__content'>
        <h5>Get Up to 20% Discount</h5>
        <h4>Deals of This Month</h4>
        <p>
          <span className='font-semibold'>Deal of the Month: Unleash Your Potential!</span> 🚀
          This month, grab our powerhouse Gaming PC at an unbeatable price! 
          Experience stunning visuals and lightning-fast performance without breaking the bank. 
          Level up your gameplay today!
        </p>

        {/* Countdown Timer */}
        <div className='deals__countdown flex-wrap'>
          <div className='deals__countdown__card'>
            <h4>{timeLeft.days}</h4>
            <p>Days</p>
          </div>
          <div className='deals__countdown__card'>
            <h4>{timeLeft.hours}</h4>
            <p>Hours</p>
          </div>
          <div className='deals__countdown__card'>
            <h4>{timeLeft.minutes}</h4>
            <p>Mins</p>
          </div>
          <div className='deals__countdown__card'>
            <h4>{timeLeft.seconds}</h4>
            <p>Secs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
