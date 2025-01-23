import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ToTopBtn from "./components/ToTopBtn/ToTopBtn";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
    return (
        <Router>
            <Header />
            <ToTopBtn />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
