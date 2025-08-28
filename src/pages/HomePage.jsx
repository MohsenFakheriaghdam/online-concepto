import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

const { useState, useEffect } = React;

export default function HomePage() {
	const [stats, setStats] = useState([
		{ value: 1245, label: "شرکت‌های فعال", icon: "building" },
		{ value: 328, label: "کل سرمایه‌گذاری (میلیون )", icon: "money-bill-wave" },
		{ value: 8560, label: "سرمایه‌گذاران", icon: "users" },
	]);

	useEffect(() => {
		const interval = setInterval(() => {
			setStats((prevStats) =>
				prevStats.map((stat) => ({
					...stat,
					value: stat.value + Math.floor(Math.random() * 10 - 5), // تغییر تصادفی
				}))
			);
		}, 2000); // هر ۵ ثانیه

		return () => clearInterval(interval);
	}, []);

	const categories = ["فناوری", "مالی", "سلامت", "تجارت الکترونیک", "آموزش", "حمل و نقل", "بلاک‌چین", "انرژی تجدیدپذیر", "غذا و نوشیدنی", "سرگرمی"];

	const popularCompanies = [
		{
			id: 1,
			name: "Snap",
			category: "تجارت الکترونیک",
			followers: 1245,
			investors: 86,
			description: "از درخواست تاکسی تا سفارش غذا و خرید سوپرمارکتی، همه را با سوپراپ اسنپ انجام دهید",
			location: "Iran, Tehran",
			rating: 4.8,
			logo: "image/snaplogo.jpg",
			founded: new Date("2014-01-01").toISOString(),
		},
		{
			id: 2,
			name: "Digikala",
			category: "تجارت الکترونیک",
			followers: 1000,
			investors: 45,
			description:
				"هر آنچه نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین موبایل‌ها، لپ‌تاپ‌ها، پوشاک، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و ...",
			location: "Iran, Tehran",
			rating: 4.6,
			logo: "image/cropped-Site-Icon.jpg",
			founded: new Date("2006-01-01").toISOString(),
		},
		{
			id: 3,
			name: "Alibaba",
			category: "تجارت الکترونیک",
			followers: 1560,
			investors: 112,
			description: "خرید بلیت هواپیما با علی‌بابا: معتبرترین و باتجربه‌ترین سامانه رزرو بلیت پرواز، قطار و اتوبوس به صورت آنلاین",
			location: "Iran, Tehran",
			rating: 4.9,
			logo: "image/alibaba.jpg",
			founded: new Date("2014-01-01").toISOString(),
		},
		{
			id: 4,
			name: "Iranserver",
			category: "تجارت الکترونیک",
			followers: 876,
			investors: 34,
			description:
				"قالب‌های شخصی ایران‌سرور انتخابی هوشمندانه برای راه‌اندازی سایت شخصی، نمونه‌کار یا رزومه است. شامل دامنه اختصاصی، سئو نام، اتصال به شبکه‌های اجتماعی و ...",
			location: "Iran, Tehran",
			rating: 4.5,
			logo: "image/iranserver.jpg",
			founded: new Date("2010-01-01").toISOString(),
		},
		{
			id: 5,
			name: " RTL Theme",
			category: "تجارت الکترونیک",
			followers: 2045,
			investors: 156,
			description:
				"اولین مرجع قانونی خرید و دانلود قالب و افزونه وردپرس اورجینال با نصب رایگان، پشتیبانی و تضمین کیفیت — RTL Theme®، قالب‌های وردپرس RTL",
			location: "Iran, Tehran",
			rating: 4.7,
			logo: "image/604U4zrw_400x400.jpg",
			founded: new Date("2017-01-01").toISOString(),
		},
	];

	const jobOpportunities = [
		{ id: 1, company: "Snap", logo: "image/snaplogo.jpg", positions: 12 },
		{ id: 2, company: "Digikala", logo: "image/cropped-Site-Icon.jpg", positions: 8 },
		{ id: 3, company: "Alibaba", logo: "image/alibaba.jpg", positions: 15 },
		{ id: 4, company: "Iranserver", logo: "image/iranserver.jpg", positions: 6 },
		{ id: 5, company: "RTL Theme", logo: "image/604U4zrw_400x400.jpg", positions: 5 },
		{ id: 6, company: "DigiPay", logo: "image/digipay.jpg", positions: 10 },
		{ id: 7, company: "Takht-Jamshid", logo: "image/takht.jpg", positions: 22 },
	];

	const newsAndEvents = [
		{
			id: 1,
			title: "اجلاس سالانه استارتاپ‌ها ۲۰۲۳",
			date: "۱۵ ژوئن ۲۰۲۳",
			description: "در بزرگترین گردهمایی نوآوران و سرمایه‌گذاران امسال شرکت کنید",
			image: "image/event1.jpg",
		},
		{
			id: 2,
			title: "فرصت‌های جدید سرمایه‌گذاری",
			date: "۲۸ مه ۲۰۲۳",
			description: "دولت صندوق ۵۰ میلیون دلاری برای استارتاپ‌های فناوری سبز اعلام کرد",
			image: "https://via.placeholder.com/300x200",
		},
		{
			id: 3,
			title: "تک‌نوا برنده جایزه نوآوری شد",
			date: "۱۵ مه ۲۰۲۳",
			description: "تقدیر برای فناوری نوآورانه هوش مصنوعی در حوزه سلامت",
			image: "https://via.placeholder.com/300x200",
		},
	];

	const [activeCategory, setActiveCategory] = useState("All");

	const navigate = useNavigate();
	// !
	const handleCompanyClick = (company) => {
		// Pass founded explicitly (though company already contains it)
		navigate(`/company/${company.id}`, { state: { company: { ...company, founded: company.founded } } });
	};

	return (
		<div className="min-h-screen ">
			{/* Hero Section */}
			{/* gradient-bg */}
			<div className="bg-[#0E1f4b]  text-[#F1F1F1] py-20 px-4 sm:px-6 lg:px-8 h-[500px] flex items-center justify-center">
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
						<Typewriter
							words={["جستجوی هوشمند، نتایج بهتر", "معرفی استارتاپ‌ها و شرکت‌های ایرانی"]}
							loop={0}
							cursor
							cursorStyle="|"
							typeSpeed={130}
							deleteSpeed={40}
							delaySpeed={1500}
						/>
					</h1>
					<p className="text-xl sm:text-2xl opacity-90">کانسپتو اولین مرجع معتبر برای معرفی استارتاپ‌ها و شرکت‌های ایرانی است</p>
				</div>
			</div>
			{/* Stats Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-between">
				<h2 className="mb-10 font-bold max-sm:text-xl md:text-2xl">با ما بهترین تجربه را داشته باشید</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between w-full ">
					{stats.map((stat, index) => (
						<div key={index} className="bg-slate-50 rounded-xl shadow-md p-6 text-center">
							<div className="text-indigo-600 text-4xl mb-2">
								<i className={`fas fa-${stat.icon}`}></i>
							</div>
							<h3 className="text-3xl font-bold text-[#0F1557]">{stat.value.toLocaleString()}</h3>
							<p className="text-gray-600 mt-2">{stat.label}</p>
						</div>
					))}
				</div>
			</div>
			{/* Categories Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
				<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">مرور بر اساس دسته‌بندی</h2>
				<div className="flex flex-wrap justify-center gap-3">
					{categories.map((category, index) => (
						<button
							key={index}
							className={`category-chip px-4 py-2 rounded-full ${
								activeCategory === category ? "bg-indigo-600 text-white" : "bg-white text-gray-700"
							} shadow-sm border border-gray-200 font-medium`}
							onClick={() => setActiveCategory(category)}
						>
							{category}
						</button>
					))}
				</div>
			</div>
			{/* Popular Companies Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-2xl sm:text-3xl font-bold text-gray-900">شرکت‌های محبوب</h2>
					<a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
						مشاهده همه
					</a>
				</div>
				<div className="relative">
					<div className="scroll-container overflow-x-auto pb-4">
						<div className="flex md:space-x-reverse md:space-x-6 max-md:gap-6" style={{ minWidth: `${popularCompanies.length * 320}px` }}>
							{popularCompanies.map((company) => (
								<button
									key={company.id}
									className="company-card bg-white rounded-xl shadow-md overflow-hidden w-80 flex-shrink-0 text-left focus:outline-none"
									onClick={() => handleCompanyClick(company)}
									tabIndex={0}
									style={{ cursor: "pointer" }}
								>
									<div className="p-6 bg-slate-50 h-72 flex flex-col justify-center">
										<div className="flex items-center justify-between mb-4">
											<div>
												<h3 className="font-bold text-right">{company.name}</h3>
												<span className="text-sm text-gray-500">{company.category}</span>
											</div>
											<img src={company.logo} alt={company.name} className="w-16 h-16 rounded-full object-cover mr-4" />
										</div>
										<p className="text-gray-500 mb-4  line-clamp-2 text-right">{company.description}</p>
										<div className="flex justify-between text-sm mb-4">
											<div>
												<span className="text-gray-500 ml-1">دنبال‌کننده</span>
												<span className="font-medium">{company.followers.toLocaleString()}</span>
											</div>
											<div>
												<span className="text-gray-500 ml-1">سرمایه‌گذار</span>
												<span className="font-medium">{company.investors}</span>
											</div>
										</div>
										<div className="flex justify-between items-center">
											<div className="text-gray-500 text-sm">
												{company.location}
												<i className="fas fa-map-marker-alt mr-1"></i>
											</div>
											<div className="flex items-center bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
												{company.rating}
												<i className="fas fa-star mr-1"></i>
											</div>
										</div>
									</div>
								</button>
								// ...existing code...
							))}
						</div>
					</div>
				</div>
			</div>
			{/* Job Opportunities Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-2xl sm:text-3xl font-bold text-gray-900">فرصت‌های شغلی</h2>
					<a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
						مشاهده همه
					</a>
				</div>
				<div className="relative">
					<div className="scroll-container overflow-x-auto pb-4">
						<div
							className="flex  md:space-x-reverse md:space-x-6 max-md:gap-6"
							style={{ minWidth: `${jobOpportunities.length * 160}px` }}
						>
							{jobOpportunities.map((job) => (
								<div
									key={job.id}
									className="job-card bg-white rounded-xl shadow-md overflow-hidden w-40 flex-shrink-0 text-center p-4"
								>
									<img src={job.logo} alt={job.company} className="w-16 h-16 rounded-full object-cover mx-auto mb-3" />
									<h3 className="font-medium text-gray-900 mb-1">{job.company}</h3>
									<div className="bg-indigo-100 text-indigo-800 rounded-full py-1 px-3 text-sm inline-block">
										{job.positions} موقعیت
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			{/* News & Events Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">آخرین اخبار و رویدادها</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{newsAndEvents.map((item) => (
						<div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
							{/* <img src={item.image} alt={item.title} className="w-full h-48 object-cover" /> */}
							<div className="p-6">
								<div className="text-indigo-600 text-sm mb-2">{item.date}</div>
								<h3 className="font-bold text-xl mb-2">{item.title}</h3>
								<p className="text-gray-600">{item.description}</p>
								<a href="#" className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium">
									ادامه مطلب
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
