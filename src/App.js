import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Main from "./components/Main";
import Search from "./components/Search";
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
                <Products />
                <h1 className="font-bold text-2xl p-5">
                  🎉Let's build AMAZONE clone 🚀
                </h1>
                <Footer />
              </>
            }
          />

          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Navbar />
                <Cart />
              </>
            }
          />

          <Route
            path="products/:id"
            element={
              <>
                <Header />
                <Navbar />
                <Main />
              </>
            }
          />

        <Route
            path="search/:query"
            element={
              <>
                <Header />
                <Navbar />
                <Search />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
