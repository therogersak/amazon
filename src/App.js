import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Header />
                <Navbar />
                <Banner />
                <h1 className="font-bold text-2xl p-5">
                  🎉Let's build AMAZONE clone 🚀
                </h1>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
