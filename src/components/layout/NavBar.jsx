import React from "react";

import AuthModal from "./AuthModal";
import { useNavigate } from "react-router-dom";

const { useState, useEffect } = React;

export default function Navbar() {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [isAuthOpen, setIsAuthOpen] = useState(false);
	const [activePath, setActivePath] = useState("/online-concepto");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		alert(`Searching for: ${searchQuery}`);
		setSearchQuery("");
	};

	return (
		<nav
			className={`sticky w-full z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-4"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 ">
					{/* Logo and main nav */}
					<div className="flex items-center">
						<div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate("/online-concepto")} tabIndex={0}>
							<i className="fas fa-cube text-indigo-600 text-2xl mr-2"></i>
							<span className="text-xl font-bold text-gray-800 mr-2">کانسپتو</span>
						</div>
						<div className="hidden md:mr-10 lg:flex  md:space-x-reverse md:space-x-6 ">
							<button
								onClick={() => {
									setActivePath("/online-concepto");
									navigate("/online-concepto");
								}}
								className={`font-bold inline-flex items-center px-1 pt-1 border-b-2 text-sm bg-transparent focus:outline-none ${
									activePath === "/online-concepto"
										? "text-indigo-600 border-indigo-500"
										: "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
								}`}
							>
								خانه
							</button>
							<button
								onClick={() => {
									setActivePath("/aboutus");
									navigate("/aboutus");
								}}
								className={`font-bold inline-flex items-center px-1 pt-1 border-b-2 text-sm bg-transparent focus:outline-none ${
									activePath === "/aboutus"
										? "text-indigo-600 border-indigo-500"
										: "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
								}`}
							>
								درباره ما
							</button>
							{/* <a
								href="#"
								className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
							>
								محصولات
							</a> */}
							{/* <button
								onClick={() => setActivePath("/services")}
								className={`font-bold inline-flex items-center px-1 pt-1 border-b-2 text-sm bg-transparent focus:outline-none ${
									activePath === "/services"
										? "text-indigo-600 border-indigo-500"
										: "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
								}`}
							>
								خدمات
							</button> */}
							<button
								onClick={() => setActivePath("/contact")}
								className={`font-bold inline-flex items-center px-1 pt-1 border-b-2 text-sm bg-transparent focus:outline-none ${
									activePath === "/contact"
										? "text-indigo-600 border-indigo-500"
										: "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
								}`}
							>
								تماس
							</button>
						</div>
					</div>

					{/* Search and buttons */}
					<div className="hidden lg:flex items-center md:space-x-reverse md:space-x-5">
						<form onSubmit={handleSearch} className="relative  flex items-center ">
							<input
								type="text"
								placeholder="جستجو..."
								className="search-input bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-none w-full"
								style={{ transition: "none", width: "100%" }}
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<button
								type="submit"
								className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-none"
								style={{ transition: "none" }}
							>
								<i className="fas fa-search"></i>
							</button>
						</form>

						<div className="flex space-x-2">
							{/* <button className="px-4 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors">
								Log In
							</button> */}
							<button
								onClick={() => setIsAuthOpen(true)}
								className="px-4 py-2 rounded-md text-sm font-medium bg-[#0E1f4b]  text-[#F1F1F1] transition-colors shadow-sm"
							>
								ثبت‌نام / ورود
							</button>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="-mr-2 flex items-center lg:hidden">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						>
							<span className="sr-only">Open main menu</span>
							{isMenuOpen ? <i className="fas fa-times text-xl"></i> : <i className="fas fa-bars text-xl"></i>}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div className={`mobile-menu lg:hidden ${isMenuOpen ? "open" : ""}`}>
				<div className="pt-2 pb-4 px-4 space-y-1 bg-white shadow-lg">
					<form onSubmit={handleSearch} className="relative mb-4 flex items-center">
						<input
							type="text"
							placeholder="جستجو..."
							className="search-input bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-none w-full"
							style={{ transition: "none", width: "100%" }}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<button
							type="submit"
							className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-none"
							style={{ transition: "none" }}
						>
							<i className="fas fa-search"></i>
						</button>
					</form>

					<button
						onClick={() => {
							setActivePath("/online-concepto");
							setIsMenuOpen(false);
							navigate("/online-concepto");
						}}
						className={`block px-3 py-2 rounded-md text-base font-medium w-full text-right bg-transparent focus:outline-none ${
							activePath === "/online-concepto" ? "text-indigo-600 bg-indigo-50" : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
						}`}
					>
						خانه
					</button>
					<button
						onClick={() => {
							setActivePath("/aboutus");
							setIsMenuOpen(false);
							navigate("/aboutus");
						}}
						className={`block px-3 py-2 rounded-md text-base font-medium w-full text-right bg-transparent focus:outline-none ${
							activePath === "/aboutus" ? "text-indigo-600 bg-indigo-50" : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
						}`}
					>
						درباره ما
					</button>
					<button
						onClick={() => {
							setActivePath("/services");
							setIsMenuOpen(false);
							/* navigate("/services"); */
						}}
						className={`block px-3 py-2 rounded-md text-base font-medium w-full text-right bg-transparent focus:outline-none ${
							activePath === "/services" ? "text-indigo-600 bg-indigo-50" : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
						}`}
					>
						خدمات
					</button>
					<button
						onClick={() => {
							setActivePath("/contact");
							setIsMenuOpen(false);
							/* navigate("/contact"); */
						}}
						className={`block px-3 py-2 rounded-md text-base font-medium w-full text-right bg-transparent focus:outline-none ${
							activePath === "/contact" ? "text-indigo-600 bg-indigo-50" : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
						}`}
					>
						تماس
					</button>

					<div className="pt-4 border-t border-gray-200">
						<button
							onClick={() => setIsAuthOpen(true)}
							className="w-full px-4 py-2 rounded-md text-base font-medium  bg-[#0E1f4b]  text-[#F1F1F1] shadow-sm"
						>
							ورود / ثبت‌نام
						</button>
					</div>
				</div>
			</div>
			<AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
		</nav>
	);
}

{
	/* <button className="w-full px-4 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm">
	Log In / Sign Up
</button>; */
}

{
	/* <button className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm">
	Sign Up / Log In
</button>; */
}
