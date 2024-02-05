import Hero from './components/Hero/Hero'
import AmbassadorsSection from './components/Ambassadors/Ambassadors'
import WorkshopsSection from './components/Workshops/Workshops'
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <>
      <Hero />
      <AmbassadorsSection />
      <WorkshopsSection />
      <Footer />
    </>
  );
};

export default Home;
