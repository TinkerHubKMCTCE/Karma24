// src/Countdown.js
import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = ({ targetDate, title }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeUnit = () => {
    switch (title.toLowerCase()) {
      case "days":
        return timeLeft.days;
      case "hours":
        return timeLeft.hours;
      case "minutes":
        return timeLeft.minutes;
      case "seconds":
        return timeLeft.seconds;
      default:
        return 0;
    }
  };

  return (
    <div className="countdown-item">
      <div className="countdown-circle">{getTimeUnit()}</div>
      <div className="countdown-title">{title}</div>
    </div>
  );
};

export default Countdown;
