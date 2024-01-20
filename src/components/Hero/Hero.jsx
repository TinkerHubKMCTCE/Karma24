import KmctLogo from "../../assets/kmct-logo.svg";
import KarmaLogo from "../../assets/karma-logo.svg";
import karma24 from "../../assets/karma24.svg";

import styles from "./Hero.module.css";
import Countdown from "../Countdown/Countdown";

const Hero = () => {
  const targetDate = new Date("2024-03-01T00:00:00");

  return (
    <div id={styles.hero} className="min-h-screen flex flex-col p-10">
      <div className="flex justify-between items-center">
        <img src={KmctLogo} className="h-16" alt="KMCT Logo" />
        <h3 className="text-4xl">KMCT COLLEGE OF ENGINEERING</h3>
        <img src={KarmaLogo} className="h-16" alt="KMCT Logo" />
      </div>
      <div className="my-auto py-10">
        <p className={`${styles.desc} text-center text-3xl`}>National-Level</p>
        <p className={`${styles.desc} text-center text-3xl`}>
          Techno Cultural Extravaganza
        </p>
        <img className="max-w-xl mx-auto mt-6" src={karma24} alt="KARMA'24" />
        <p className="mt-6 text-center text-xl uppercase font-medium tracking-widest">
          what goes around comes around
        </p>
        <div className="flex justify-center gap-10 mt-10">
          <Countdown targetDate={targetDate} title="Days" />
          <Countdown targetDate={targetDate} title="Hours" />
          <Countdown targetDate={targetDate} title="Minutes" />
          <Countdown targetDate={targetDate} title="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
