import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-hidden">
      <nav className="px-2 lg:px-0 bg-amber-50 lg:bg-transparent lg:mx-30 lg:py-3 fixed top-0 left-0 w-full lg:w-[-webkit-fill-available] z-90">
        <Navbar />
      </nav>
      <header className="relative h-screen">
        <Hero />
      </header>
      <main className="px-2 lg:px-0 lg:mx-30 relative h-full mb-35">
        <Main />
      </main>
      <footer className="z-50 hidden lg:block lg:fixed bottom-0 border-t-2 border-white bg-yellow-600 lg:mx-30 h-20 py-15 px-2 w-[-webkit-fill-available]">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
