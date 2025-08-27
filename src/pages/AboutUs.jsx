import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const testimonials = [
	{
		name: "مینا احمدی",
		role: "بنیانگذار استارتاپ تکنولوژی",
		image: "https://randomuser.me/api/portraits/women/33.jpg",
		quote: "همکاری با این تیم نقطه عطفی برای کسب و کار ما بود. آنها نه تنها سرمایه مالی بلکه راهنمایی‌های استراتژیک ارزشمندی ارائه دادند که ما را به سطح جدیدی رساند.",
		rating: 5,
	},
	{
		name: "رضا نوروزی",
		role: "مدیر عامل شرکت نرم‌افزاری",
		image: "https://randomuser.me/api/portraits/men/46.jpg",
		quote: "پشتیبانی و شبکه‌ای که این تیم برای ما فراهم کرد، به رشد سریع کسب و کارمان کمک شایانی کرد. واقعاً حرفه‌ای هستند!",
		rating: 5,
	},
	{
		name: "نرگس فلاحی",
		role: "مدیر محصول",
		image: "https://randomuser.me/api/portraits/women/62.jpg",
		quote: "تجربه کار با این تیم فوق‌العاده بود. درک عمیقی از چالش‌های استارتاپ‌ها دارند و راهکارهای عملی ارائه می‌دهند.",
		rating: 4,
	},
];

const AboutUsPage = () => {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const statsRef = useRef(null);

	useEffect(() => {
		// Animate numbers when scrolled into view
		const animateNumbers = () => {
			const numberElements = document.querySelectorAll(".animate-number");
			numberElements.forEach((element) => {
				const target = parseInt(element.getAttribute("data-target"));
				const duration = 2000;
				const start = 0;
				const increment = target / (duration / 16);
				let current = start;
				const timer = setInterval(() => {
					current += increment;
					if (current >= target) {
						clearInterval(timer);
						current = target;
					}
					element.textContent = Math.floor(current) + (element.getAttribute("data-target") === "50" ? "M+" : "+");
				}, 16);
			});
		};

		// Fade-in animation
		const handleScrollAnimations = () => {
			const fadeElements = document.querySelectorAll(".fade-in");
			fadeElements.forEach((element) => {
				const rect = element.getBoundingClientRect();
				if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0) {
					element.classList.add("visible");
					if (element.querySelector(".animate-number") && !element.classList.contains("animated")) {
						element.classList.add("animated");
						animateNumbers();
					}
				}
			});
		};

		handleScrollAnimations();
		window.addEventListener("scroll", handleScrollAnimations);
		return () => {
			window.removeEventListener("scroll", handleScrollAnimations);
		};
	}, []);

	// Testimonial slider
	const handleNextTestimonial = () => {
		setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
	};
	const handlePrevTestimonial = () => {
		setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	// Scroll to section
	const scrollToSection = (id) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="bg-gray-50 text-gray-800 font-[Vazirmatn]" dir="rtl">
			{/* Hero Section */}
			<section className="relative h-[500px] flex items-center justify-center overflow-hidden">
				<video autoPlay muted loop className="hero-video absolute top-0 right-0 w-full h-full object-cover z-[-1]">
					<source src="https://assets.mixkit.co/videos/preview/mixkit-team-meeting-brainstorming-3880-large.mp4" type="video/mp4" />
				</video>
				<div className="gradient-bg absolute inset-0 "></div>
				<div className="container mx-auto px-6 z-10 text-white text-center ">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						<Typewriter
							words={["ساختن آینده، با هم", "Mohsen Fakheriaghdam"]}
							loop={0}
							cursor
							cursorStyle="|"
							typeSpeed={130}
							deleteSpeed={40}
							delaySpeed={1500}
						/>
					</h1>
					<p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">ما در ماموریتی برای توانمندسازی نوآوران در سراسر جهان هستیم.</p>
					<button
						onClick={() => scrollToSection("story")}
						className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300 transform hover:scale-105"
					>
						کشف داستان ما
					</button>
				</div>
			</section>

			{/* Storytelling Section */}
			<section id="story" className="py-20 px-6 relative overflow-hidden">
				<div className="blob-shape bg-purple-400 w-64 h-64 top-20 right-1/4 absolute"></div>
				<div className="blob-shape bg-blue-400 w-80 h-80 bottom-20 left-1/4 absolute"></div>
				<div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
					<div className="lg:w-1/2">
						<img
							src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
							alt="تیم ما"
							className="rounded-2xl shadow-xl w-full h-auto"
						/>
					</div>
					<div className="lg:w-1/2">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">ما کی هستیم؟</h2>
						<p className="text-lg md:text-xl mb-6 leading-relaxed">
							ما یک <span className="font-bold text-indigo-600">تیم پرشور</span> از افراد خلاق هستیم که باور داریم فناوری می‌تواند جهان
							را به جای بهتری تبدیل کند. از سال <span className="font-bold text-purple-600">1395</span>، ما در حال ایجاد راه‌حل‌های
							نوآورانه برای چالش‌های پیچیده بوده‌ایم.
						</p>
						<p className="text-lg md:text-xl leading-relaxed">
							ماموریت ما <span className="font-bold text-blue-600">توانمندسازی استارتاپ‌ها</span> و کمک به رشد آنها از طریق ترکیبی از
							تخصص فنی، راهنمایی استراتژیک و شبکه‌سازی است. ما به همکاری، شفافیت و تاثیر مثبت پایدار اعتقاد داریم.
						</p>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-gray-100">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">تاثیر ما در اعداد</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="bg-white rounded-2xl p-8 shadow-lg text-center fade-in">
							<div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<i className="fas fa-globe text-indigo-600 text-2xl"></i>
							</div>
							<div className="text-4xl font-bold mb-2 animate-number" data-target="20">
								0
							</div>
							<div className="text-gray-600">کشورهای تحت پوشش</div>
						</div>
						<div className="bg-white rounded-2xl p-8 shadow-lg text-center fade-in">
							<div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<i className="fas fa-rocket text-purple-600 text-2xl"></i>
							</div>
							<div className="text-4xl font-bold mb-2 animate-number" data-target="800">
								0
							</div>
							<div className="text-gray-600">استارتاپ‌های حمایت شده</div>
						</div>
						<div className="bg-white rounded-2xl p-8 shadow-lg text-center fade-in">
							<div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<i className="fas fa-dollar-sign text-blue-600 text-2xl"></i>
							</div>
							<div className="text-4xl font-bold mb-2 animate-number" data-target="50">
								0
							</div>
							<div className="text-gray-600">میلیون دلار سرمایه‌گذاری</div>
						</div>
						<div className="bg-white rounded-2xl p-8 shadow-lg text-center fade-in">
							<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<i className="fas fa-handshake text-green-600 text-2xl"></i>
							</div>
							<div className="text-4xl font-bold mb-2 animate-number" data-target="1500">
								0
							</div>
							<div className="text-gray-600">سرمایه‌گذار متصل</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}

			{/* Timeline Section */}
			<section className="py-20 bg-gray-100 ">
				<div className="container mx-auto px-6 scroll-container ">
					<h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">سفر ما</h2>
					{/* Horizontal Timeline - Always Visible */}
					<div className="timeline-container overflow-x-auto pb-8 flex h-[250px]">
						<div className="flex flex-nowrap gap-6 px-4">
							{/* Timeline Items */}
							{/* ...existing code for timeline items... */}
							<div className="timeline-card bg-white rounded-2xl p-6 shadow-lg w-64 flex-shrink-0 flex flex-col justify-between">
								<div>
									<h3 className="text-xl font-bold mb-2">تاسیس شرکت</h3>
									<p className="text-gray-600 text-sm">شروع کار با تیمی 3 نفره در یک دفتر کوچک</p>
									<div className="mt-4 text-indigo-500">{/* <i className="fas fa-building text-2xl"></i> */}</div>
								</div>
								<div className="text-white font-bold mb-2 bg-[#6366f1] w-full rounded-lg flex items-center justify-center pt-[2px] pb-[2px] cursor-pointer">
									<span>1395</span>
								</div>
							</div>
							<div className="timeline-card bg-white rounded-2xl p-6 shadow-lg w-64 flex-shrink-0 flex flex-col justify-between">
								<div>
									<h3 className="text-xl font-bold mb-2">اولین سرمایه‌گذاری</h3>
									<p className="text-gray-600 text-sm">جذب اولین سرمایه‌گذار و گسترش تیم</p>
									<div className="mt-4 text-purple-500">{/* <i className="fas fa-hand-holding-usd text-2xl"></i> */}</div>
								</div>
								<div className="text-white font-bold mb-2 bg-[#6366f1] w-full rounded-lg flex items-center justify-center pt-[2px] pb-[2px] cursor-pointer ">
									<span>1396</span>
								</div>
							</div>
							<div className="timeline-card bg-white rounded-2xl p-6 shadow-lg w-64 flex-shrink-0 flex flex-col justify-between">
								<div>
									<h3 className="text-xl font-bold mb-2">گسترش بین‌المللی</h3>
									<p className="text-gray-600 text-sm">شروع فعالیت در 5 کشور منطقه</p>
									<div className="mt-4 text-blue-500">{/* <i className="fas fa-globe-asia text-2xl"></i> */}</div>
								</div>
								<div className="text-white font-bold mb-2 bg-[#6366f1] w-full rounded-lg flex items-center justify-center pt-[2px] pb-[2px] cursor-pointer">
									<span>1397</span>
								</div>
							</div>
							<div className="timeline-card bg-white rounded-2xl p-6 shadow-lg w-64 flex-shrink-0 flex flex-col justify-between">
								<div>
									<h3 className="text-xl font-bold mb-2">برند سال</h3>
									<p className="text-gray-600 text-sm">دریافت جایزه برترین شتابدهنده استارتاپی</p>
									<div className="mt-4 text-green-500">{/* <i className="fas fa-award text-2xl"></i> */}</div>
								</div>
								<div className="text-white font-bold mb-2 bg-[#6366f1] w-full rounded-lg flex items-center justify-center pt-[2px] pb-[2px] cursor-pointer">
									<span>1398</span>
								</div>
							</div>
							<div className="timeline-card bg-white rounded-2xl p-6 shadow-lg w-64 flex-shrink-0 flex flex-col justify-between">
								<div>
									<h3 className="text-xl font-bold mb-2">دور جدید سرمایه‌گذاری</h3>
									<p className="text-gray-600 text-sm">جذب 10 میلیون دلار سرمایه سری A</p>
									<div className="mt-4 text-yellow-500">{/* <i className="fas fa-chart-line text-2xl"></i> */}</div>
								</div>
								<div className="text-white font-bold mb-2 bg-[#6366f1] w-full rounded-lg flex items-center justify-center pt-[2px] pb-[2px] cursor-pointer">
									<span>1399</span>
								</div>
							</div>
						</div>
					</div>
					{/* Vertical Timeline for Desktop - Removed for now */}
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 px-6">
				<div className="container mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">نظرات درباره ما</h2>
					<div className="relative max-w-4xl mx-auto">
						<div className="testimonial-slider overflow-hidden ">
							<div className="flex transition-transform duration-300 ">
								<div className="testimonial-card w-full flex-shrink-0 rounded-2xl p-8 shadow-md bg-gray-100">
									<div className="flex items-center mb-6">
										<img
											src={testimonials[currentTestimonial].image}
											alt={testimonials[currentTestimonial].name}
											className="w-16 h-16 rounded-full object-cover"
										/>
										<div className="mr-4">
											<h4 className="font-bold">{testimonials[currentTestimonial].name}</h4>
											<p className="text-gray-600 text-sm">{testimonials[currentTestimonial].role}</p>
										</div>
									</div>
									<p className="text-gray-700">{testimonials[currentTestimonial].quote}</p>
									<div className="mt-4 text-yellow-400">
										{Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
											<i key={i} className="fas fa-star"></i>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center mt-8 gap-2">
							<button
								className="testimonial-prev bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center"
								onClick={handlePrevTestimonial}
							>
								<i className="fas fa-chevron-right"></i>
							</button>
							<button
								className="testimonial-next bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center"
								onClick={handleNextTestimonial}
							>
								<i className="fas fa-chevron-left"></i>
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Partners Section */}

			{/* CTA Section */}
			<section className="py-20 bg-slate-200  text-black relative overflow-hidden">
				<div className="wave-bg bg-white absolute bottom-0 left-0 w-[200%] h-full opacity-10 z-[-1]"></div>
				<div className="container mx-auto px-6 text-center relative z-10">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">آماده‌اید آینده را با ما بسازید؟</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto">به جامعه نوآوران ما بپیوندید و از فرصت‌های بی‌نظیر ما بهره‌مند شوید.</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium transition duration-300 transform hover:scale-105">
							به عنوان استارتاپ بپیوندید
						</button>
						<button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-full text-lg font-medium transition duration-300 transform hover:scale-105">
							به عنوان سرمایه‌گذار بپیوندید
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUsPage;
