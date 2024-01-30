import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Ambassadors from "./components/Ambassadors/Ambassadors";
import Workshops from "./components/Workshops/Workshops";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Ambassadors />
      <Workshops />
    </div>
  );
}

export default App;
