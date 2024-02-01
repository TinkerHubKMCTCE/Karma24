import Home from './views/home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
