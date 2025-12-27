import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Simple reusable page
const Page = ({ title }) => (
  <div className="pt-32 min-h-screen bg-black text-white flex items-center justify-center text-3xl font-bold">
    {title}
  </div>
);

function App() {
  return (
    <Router>
      <NavBar />
    
      <Routes>
        <Route path="/" element={<Page title="Welcome to SUNBIRD 🚀" />} />

        {/* Store Routes */}
        <Route path="/store/latest" element={<Page title="Shop The Latest" />} />
        <Route path="/store/earbuds" element={<Page title="Earbuds" />} />
        <Route path="/store/smartwatch" element={<Page title="Smart Watch" />} />
        <Route path="/store/earphone" element={<Page title="Earphone" />} />
        <Route path="/store/speaker" element={<Page title="Speaker" />} />
        <Route path="/store/neckband" element={<Page title="Neckband" />} />

        {/* Support Routes */}
        <Route path="/support" element={<Page title="Support" />} />
        <Route path="/help" element={<Page title="Help" />} />
        <Route path="/faq" element={<Page title="FAQ" />} />
        <Route path="/returns" element={<Page title="Returns & Refunds" />} />
        <Route path="/shipping" element={<Page title="Shipping Guide" />} />
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
