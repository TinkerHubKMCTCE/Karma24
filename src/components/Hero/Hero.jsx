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
        <h3 className="text-xl text-center md:text-3xl">KMCT COLLEGE OF ENGINEERING</h3>
        <img src={KarmaLogo} className="h-16" alt="KMCT Logo" />
      </div>
      <div className="my-auto py-10">
        <p className={`${styles.desc} text-center text-3xl`}>National-Level</p>
        <p className={`${styles.desc} text-center text-3xl`}>
          Techno Cultural Extravaganza
        </p>
        <img className="max-w-xl mx-auto mt-6 w-full" src={karma24} alt="KARMA'24" />
        <p className="mt-6 font-inversionz text-center text-3xl uppercase font-medium">
          what goes around comes around
        </p>
        <div className="grid grid-cols-4 gap-4 md:gap-10 mt-10 max-w-2xl mx-auto">
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
