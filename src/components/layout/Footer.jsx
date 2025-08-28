import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	const [email, setEmail] = React.useState("");
	const [subscribed, setSubscribed] = React.useState(false);

	const handleSubscribe = (e) => {
		e.preventDefault();
		if (email) {
			setSubscribed(true);
			setEmail("");
			setTimeout(() => setSubscribed(false), 3000);
		}
	};

	return (
		<footer className="bg-[#0E1f4b]  text-[#F1F1F1]  pt-12 pb-6 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<h3 className="text-xl font-bold flex items-center">
							<i className="fas fa-rocket ml-2"></i>
							کانسپتو
						</h3>
						<p className="text-gray-200">نوآوری برای آینده، یک راه‌حل در هر زمان. ما تجربه‌های دیجیتال ارزشمند می‌سازیم.</p>
						<div className="flex md:space-x-reverse md:space-x-6 pt-2 max-md:gap-4">
							{["facebook", "twitter", "instagram", "linkedin"].map((social) => (
								<a
									key={social}
									href="#"
									className="text-white hover:text-gray-300 transition-colors duration-300"
									aria-label={social}
								>
									<i className={`fab fa-${social} text-xl`}></i>
								</a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">لینک‌های سریع</h3>
						<ul className="space-y-2">
							{["خانه", "درباره ما", "خدمات", "قیمت‌گذاری", "بلاگ"].map((link) => (
								<li key={link}>
									{link === "خانه" ? (
										<Link to="/online-concepto" className="footer-link text-gray-200 hover:text-white flex items-center">
											<i className="fas fa-chevron-right text-xs mr-2"></i>
											{link}
										</Link>
									) : (
										<a href="#" className="footer-link text-gray-200 hover:text-white flex items-center">
											<i className="fas fa-chevron-right text-xs mr-2"></i>
											{link}
										</a>
									)}
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-lg font-semibold mb-4">خدمات ما</h3>
						<ul className="space-y-2">
							{["توسعه وب", "اپلیکیشن موبایل", "طراحی UI/UX", "راهکارهای ابری", "بازاریابی دیجیتال"].map((service) => (
								<li key={service}>
									<a href="#" className="footer-link text-gray-200 hover:text-white flex items-center">
										<i className="fas fa-check-circle text-xs ml-2"></i>
										{service}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="text-lg font-semibold mb-4">خبرنامه</h3>
						<p className="text-gray-200 mb-4">برای دریافت جدیدترین اخبار و پیشنهادها در خبرنامه ما عضو شوید.</p>
						<form onSubmit={handleSubscribe} className="space-y-3">
							<div className="relative">
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="ایمیل شما"
									className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
									required
								/>
								<button
									type="submit"
									className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#fec302]  text-[#0E1f4b]  p-2 rounded-md text-sm transition-colors duration-300 flex items-center justify-center"
								>
									<i className="fas fa-paper-plane"></i>
								</button>
							</div>
							{subscribed && <div className="bg-green-500 text-white px-3 py-2 rounded-md text-sm">با تشکر از عضویت شما!</div>}
						</form>
						<div className="mt-4 flex items-center md:space-x-reverse md:space-x-2 max-md:gap-2">
							<i className="fas fa-phone-alt"></i>
							<span>09142425473</span>
						</div>
						<div className="flex items-center md:space-x-reverse md:space-x-2 max-md:gap-2">
							<i className="fas fa-envelope"></i>
							<span>mohen.6ix.ca@gmail.com</span>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-300 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} کانسپتو کلیه حقوق محفوظ است</p>
					<div className="flex space-x-6">
						<a href="#" className="text-gray-300 hover:text-white text-sm">
							سیاست حفظ حریم خصوصی
						</a>
						<a href="#" className="text-gray-300 hover:text-white text-sm">
							شرایط استفاده
						</a>
						<a href="#" className="text-gray-300 hover:text-white text-sm">
							محسن فاخری اقدم
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
