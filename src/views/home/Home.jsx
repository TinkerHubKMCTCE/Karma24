import Hero from "./components/Hero/Hero";
import AmbassadorsSection from "./components/Ambassadors/Ambassadors";
import WorkshopsSection from "./components/Workshops/Workshops";
import EventsSection from "./components/Events/EventsSection";
import Footer from "../../components/Footer/Footer";
import SpotLight from "./components/SpotLight";

const Home = () => {
  return (
    <>
      <Hero />
      <AmbassadorsSection />
      <EventsSection />
      <WorkshopsSection />
      <SpotLight />
    </>
  );
};

export default Home;
