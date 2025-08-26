// import Footer from "../components/layout/Footer";
// import Navbar from "../components/layout/NavBar";
// import Header from "../components/layout/Header";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/NavBar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import AboutUs from "./pages/AboutUs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="min-w-80 min-h-screen ">
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/company/:id" element={<CompanyPage />} />
					<Route path="/aboutus" element={<AboutUs />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}
export default App;
