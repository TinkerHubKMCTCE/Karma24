import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AmbassadorDashboard = () => {
  const location = useLocation();
  const referralCode = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!referralCode) window.location.replace("/not-found");
  }, []);

  return (
    <div className="container mx-auto pb-20 max-w-screen-xl pt-28">
      <p className="font-retroTeam text-3xl text-center text-karma-blue mb-2">
        Your Refferal Code
      </p>
      <p className="text-white font-bold font-orbitron text-7xl text-center">
        {referralCode}
      </p>
    </div>
  );
};

export default AmbassadorDashboard;
