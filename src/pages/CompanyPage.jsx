import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// Default data (used if no data is passed from HomePage)
const defaultCompanyData = {
	name: "ایران سرور",
	category: "فناوری اطلاعات",
	founded: 1389,
	headquarters: "تهران، خیابان فناوری، پلاک ۱۲۳",
	employees: "۲۵۰+",
	website: "www.iranserver.com",
	contact: "۰۲۱-۹۱۰۰۲۹۹۹",
	industry: "فناوری اطلاعات و خدمات میزبانی وب",
	description: "ایران سرور، ارائه‌دهنده انواع سرویس‌های هاست، سرور اختصاصی و مجازی، ثبت دامنه و خدمات ابری با پشتیبانی ۲۴ ساعته.",
	details: ["میزبانی وب و ثبت دامنه", "سرور اختصاصی و مجازی", "خدمات ابری و بکاپ", "گواهینامه امنیتی SSL", "پشتیبانی ۲۴/۷ و مشاوره تخصصی"],
	fullDescription:
		"ایران سرور با بیش از یک دهه تجربه، به عنوان یکی از بزرگ‌ترین شرکت‌های میزبانی وب و ارائه‌دهنده زیرساخت ابری در ایران شناخته می‌شود. ما با تیمی متخصص و دفاتری در تهران و مشهد، به بیش از ۳۰ هزار کسب‌وکار خدمات ارائه می‌دهیم. هدف ما ارتقاء کیفیت خدمات میزبانی و امنیت اطلاعات مشتریان است.",
};

const faqData = [
	{
		question: "ایران سرور چه خدماتی ارائه می‌دهد؟",
		answer: "ایران سرور خدمات میزبانی وب، سرور اختصاصی و مجازی، ثبت دامنه، هاست وردپرس، گواهینامه SSL و خدمات ابری را با پشتیبانی ۲۴ ساعته ارائه می‌کند.",
	},
	{
		question: "چگونه می‌توانم با پشتیبانی ایران سرور تماس بگیرم؟",
		answer: "شما می‌توانید از طریق شماره ۰۲۱-۹۱۰۰۲۹۹۹ یا ارسال تیکت از پنل کاربری با پشتیبانی ایران سرور در ارتباط باشید.",
	},
	{
		question: "آیا ایران سرور خدمات انتقال سایت را انجام می‌دهد؟",
		answer: "بله، تیم فنی ایران سرور به صورت رایگان سایت شما را از سرویس‌دهنده قبلی به سرورهای ایران سرور منتقل می‌کند.",
	},
	{
		question: "آیا امکان خرید هاست با دوره پرداخت ماهانه وجود دارد؟",
		answer: "بله، شما می‌توانید هاست و سرور را با دوره‌های پرداخت ماهانه، سه‌ماهه، شش‌ماهه و سالانه تهیه کنید.",
	},
	{
		question: "آیا ایران سرور گارانتی بازگشت وجه دارد؟",
		answer: "بله، ایران سرور تا ۷ روز پس از خرید، گارانتی بازگشت وجه برای سرویس‌های میزبانی وب ارائه می‌دهد.",
	},
];

const employeesData = [
	{
		name: "محمدرضا احمدی",
		position: "مدیرعامل و بنیان‌گذار ایران سرور",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
		bio: "بیش از ۱۵ سال سابقه در حوزه میزبانی وب و زیرساخت ابری. بنیان‌گذار ایران سرور و پیشگام در توسعه خدمات هاستینگ در ایران.",
	},
	{
		name: "زهرا رضایی",
		position: "مدیر فنی (CTO)",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
		bio: "متخصص زیرساخت ابری و امنیت شبکه با سابقه مدیریت پروژه‌های بزرگ دیتاسنتر و توسعه سرویس‌های ابری.",
	},
	{
		name: "علی موسوی",
		position: "مدیر پشتیبانی مشتریان",
		image: "https://randomuser.me/api/portraits/men/75.jpg",
		bio: "مدیر تیم پشتیبانی با رویکرد مشتری‌مدار و سابقه پاسخگویی به بیش از ۵۰ هزار تیکت در ایران سرور.",
	},
	{
		name: "مریم کریمی",
		position: "مدیر محصول و توسعه کسب‌وکار",
		image: "https://randomuser.me/api/portraits/women/63.jpg",
		bio: "توسعه‌دهنده استراتژی‌های نوآورانه برای محصولات هاستینگ و خدمات ابری ایران سرور.",
	},
	{
		name: "حسین شریفی",
		position: "مدیر امنیت اطلاعات",
		image: "https://randomuser.me/api/portraits/men/81.jpg",
		bio: "متخصص امنیت سایبری و پیاده‌سازی استانداردهای امنیتی برای حفاظت از داده‌های مشتریان.",
	},
	{
		name: "نگار محمدی",
		position: "مدیر طراحی تجربه کاربری",
		image: "https://randomuser.me/api/portraits/women/90.jpg",
		bio: "طراح رابط کاربری با تمرکز بر بهبود تجربه مشتریان در پنل کاربری و سایت ایران سرور.",
	},
	{
		name: "رضا قاسمی",
		position: "مدیر دیتاسنتر",
		image: "https://randomuser.me/api/portraits/men/22.jpg",
		bio: "مدیر عملیات دیتاسنتر و مسئول راه‌اندازی و نگهداری سرورهای اختصاصی و ابری.",
	},
	{
		name: "سحر یوسفی",
		position: "مدیر بازاریابی دیجیتال",
		image: "https://randomuser.me/api/portraits/women/28.jpg",
		bio: "متخصص بازاریابی آنلاین و توسعه برند ایران سرور در فضای دیجیتال.",
	},
];

const postsData = [
	{
		title: "افتتاح دیتاسنتر جدید ایران سرور در مشهد",
		date: "۱۰ مرداد ۱۴۰۴",
		content:
			"ایران سرور با هدف افزایش کیفیت خدمات و پایداری بیشتر، دیتاسنتر اختصاصی خود را در مشهد افتتاح کرد. این مرکز با جدیدترین تجهیزات و استانداردهای جهانی راه‌اندازی شده است.",
		author: "محمدرضا احمدی",
		likes: 210,
		comments: 41,
	},
	{
		title: "ارائه سرویس هاست وردپرس پرسرعت",
		date: "۲۵ تیر ۱۴۰۴",
		content: "سرویس جدید هاست وردپرس ایران سرور با منابع اختصاصی و امنیت بالا، مناسب کسب‌وکارهای آنلاین و فروشگاه‌های اینترنتی راه‌اندازی شد.",
		author: "مریم کریمی",
		likes: 156,
		comments: 29,
	},
	{
		title: "برگزاری وبینار آموزش امنیت وب‌سایت‌ها",
		date: "۵ تیر ۱۴۰۴",
		content: "ایران سرور با همکاری کارشناسان امنیت، وبیناری رایگان برای آموزش راهکارهای افزایش امنیت سایت و مقابله با حملات سایبری برگزار کرد.",
		author: "حسین شریفی",
		likes: 98,
		comments: 17,
	},
];

const newsData = [
	{
		title: "ایران سرور برنده جایزه بهترین شرکت میزبانی وب شد",
		date: "۲ مرداد ۱۴۰۴",
		type: "خبر",
		content: "در جشنواره ملی فناوری اطلاعات، ایران سرور به عنوان بهترین شرکت ارائه‌دهنده خدمات میزبانی وب در سال ۱۴۰۴ انتخاب شد.",
		image: "https://via.placeholder.com/600x400?text=Award+IranServer",
	},
	{
		title: "رویداد تخصصی امنیت سایبری ایران سرور",
		date: "۲۰ تیر ۱۴۰۴",
		type: "رویداد",
		content: "ایران سرور با حضور کارشناسان امنیت، رویدادی برای بررسی تهدیدات جدید سایبری و راهکارهای مقابله برگزار کرد.",
		image: "https://via.placeholder.com/600x400?text=Cyber+Event",
	},
	{
		title: "همکاری ایران سرور با دانشگاه فردوسی مشهد",
		date: "۱۰ تیر ۱۴۰۴",
		type: "خبر",
		content: "ایران سرور و دانشگاه فردوسی مشهد تفاهم‌نامه‌ای برای توسعه زیرساخت‌های ابری و آموزش تخصصی امضا کردند.",
		image: "https://via.placeholder.com/600x400?text=Ferdowsi+Collab",
	},
	{
		title: "وبینار رایگان آموزش مدیریت سرور",
		date: "۲ تیر ۱۴۰۴",
		type: "رویداد",
		content: "وبینار تخصصی مدیریت سرور و افزایش امنیت برای کاربران ایران سرور به صورت رایگان برگزار شد.",
		image: "https://via.placeholder.com/600x400?text=Server+Webinar",
	},
];

const similarCompaniesData = [
	{
		name: "هاست ایران",
		category: "میزبانی وب",
		employees: "۲۰۰",
		rating: "4.7",
		description: "ارائه‌دهنده خدمات هاستینگ، سرور مجازی و ثبت دامنه با پشتیبانی حرفه‌ای.",
	},
	{
		name: "برتینا",
		category: "زیرساخت ابری",
		employees: "۱۵۰",
		rating: "4.6",
		description: "پیشگام در ارائه سرور اختصاصی، ابری و خدمات دیتاسنتر در ایران.",
	},
	{
		name: "میهن وب هاست",
		category: "میزبانی وب",
		employees: "۱۲۰",
		rating: "4.5",
		description: "میزبانی وب، سرور مجازی و ثبت دامنه با قیمت مناسب و کیفیت بالا.",
	},
	{
		name: "پارس پک",
		category: "رایانش ابری",
		employees: "۱۷۰",
		rating: "4.8",
		description: "ارائه‌دهنده سرور ابری، هاست ابری و خدمات بکاپ ابری با فناوری روز.",
	},
	{
		name: "آسیاتک",
		category: "اینترنت و دیتاسنتر",
		employees: "۳۰۰",
		rating: "4.4",
		description: "ارائه اینترنت پرسرعت، خدمات دیتاسنتر و سرور اختصاصی.",
	},
	{
		name: "ایران هاست",
		category: "میزبانی وب",
		employees: "۱۰۰",
		rating: "4.3",
		description: "میزبانی وب، سرور مجازی و خدمات دامنه با سابقه طولانی در ایران.",
	},
];

const reviewsData = [
	{
		author: "علی مرادی",
		rating: 5,
		date: "۲۵ تیر ۱۴۰۴",
		title: "پشتیبانی عالی و سریع",
		content: "تیم پشتیبانی ایران سرور همیشه در کمترین زمان پاسخگو بوده و مشکلات سایت ما را به سرعت حل کرده‌اند. واقعاً راضی هستم!",
		company: "فروشگاه اینترنتی پارس کالا",
	},
	{
		author: "سمیه احمدی",
		rating: 4,
		date: "۱۸ تیر ۱۴۰۴",
		title: "انتقال سایت بدون دردسر",
		content: "انتقال سایت ما به ایران سرور خیلی راحت و بدون قطعی انجام شد. فقط در ابتدا کمی راه‌اندازی ایمیل زمان برد.",
		company: "شرکت داده‌پردازان",
	},
	{
		author: "رضا حسینی",
		rating: 5,
		date: "۱۰ تیر ۱۴۰۴",
		title: "سرعت و امنیت عالی",
		content: "هاست وردپرس ایران سرور سرعت سایت ما را چند برابر کرد و امنیت بسیار خوبی دارد.",
		company: "آژانس دیجیتال مارکتینگ نوین",
	},
	{
		author: "نگین محمدی",
		rating: 5,
		date: "۵ تیر ۱۴۰۴",
		title: "آموزش‌های کاربردی",
		content: "وبینارهای آموزشی ایران سرور بسیار مفید و کاربردی هستند و به ما کمک کردند امنیت سایت را افزایش دهیم.",
		company: "وب‌سایت آموزشی یادبگیر",
	},
];

function TabButton({ label, active, onClick }) {
	return (
		<button
			className={`tab-btn py-4 px-2 md:px-4 font-medium text-sm md:text-base border-b-2 border-transparent hover:text-blue-600 hover:border-blue-300 transition ${
				active ? "active border-blue-600 text-blue-600" : ""
			}`}
			style={{ whiteSpace: "nowrap" }}
			onClick={onClick}
			type="button"
		>
			{label}
		</button>
	);
}

function FAQItem({ faq, open, onClick }) {
	return (
		<div className={`faq-item bg-gray-50 p-4 rounded-lg cursor-pointer${open ? " open" : ""}`} onClick={onClick}>
			<div className="flex justify-between items-center">
				<h3 className="font-semibold text-gray-800">{faq.question}</h3>
				<i className={`fas fa-chevron-down faq-toggle text-blue-500 transition-transform${open ? " rotate-180" : ""}`}></i>
			</div>
			<div
				className="faq-answer mt-2 text-gray-600"
				style={{ maxHeight: open ? 500 : 0, opacity: open ? 1 : 0, overflow: "hidden", transition: "all 0.3s ease" }}
			>
				<p>{faq.answer}</p>
			</div>
		</div>
	);
}

function Employees() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{employeesData.map((employee) => (
				<div key={employee.name} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
					<img src={employee.image} alt={employee.name} className="w-full h-48 object-cover" />
					<div className="p-4">
						<h3 className="font-bold text-lg text-gray-800">{employee.name}</h3>
						<p className="text-blue-600 mb-2">{employee.position}</p>
						<p className="text-gray-600 text-sm">{employee.bio}</p>
						<div className="mt-4 flex space-x-2">
							<a href="#" className="text-blue-500 hover:text-blue-700">
								<i className="fab fa-linkedin-in"></i>
							</a>
							<a href="#" className="text-blue-500 hover:text-blue-700">
								<i className="fas fa-envelope"></i>
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

function Posts() {
	return (
		<div className="space-y-6">
			{postsData.map((post) => (
				<div key={post.title} className="bg-white rounded-lg shadow-sm p-6">
					<h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
					<div className="flex items-center text-gray-500 text-sm mb-4">
						<span>{post.date}</span>
						<span className="mx-2">•</span>
						<span>ارسال شده توسط {post.author}</span>
					</div>
					<p className="text-gray-700 mb-4">{post.content}</p>
					<div className="flex items-center text-gray-500">
						<button className="flex items-center mr-6 hover:text-blue-600">
							<i className="far fa-thumbs-up mr-2"></i>
							<span>{post.likes}</span>
						</button>
						<button className="flex items-center hover:text-blue-600">
							<i className="far fa-comment mr-2"></i>
							<span>{post.comments} دیدگاه</span>
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

function News() {
	return (
		<div className="space-y-8">
			{newsData.map((news) => (
				<div key={news.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
					<div className="md:flex">
						<div className="md:w-1/3">
							<img src={news.image} alt={news.title} className="w-full h-full object-cover" />
						</div>
						<div className="md:w-2/3 p-6">
							<div className="flex items-center mb-2">
								<span
									className={`px-3 py-1 rounded-full text-xs font-medium ${
										news.type === "News" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
									}`}
								>
									{news.type}
								</span>
								<span className="text-gray-500 text-sm ml-3">{news.date}</span>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-3">{news.title}</h3>
							<p className="text-gray-600 mb-4">{news.content}</p>
							<button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
								{news.type === "News" ? "بیشتر بخوانید" : "همین حالا ثبت نام کنید"}
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

function SimilarCompanies() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{similarCompaniesData.map((company) => (
				<div key={company.name} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
					<h3 className="text-xl font-bold text-gray-800 mb-2">{company.name}</h3>
					<div className="flex items-center mb-3">
						<span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded mr-2">{company.category}</span>
						<div className="flex items-center text-sm text-gray-600">
							<i className="fas fa-users mr-1"></i>
							<span>{company.employees}</span>
						</div>
					</div>
					<div className="flex items-center mb-4">
						{Array.from({ length: 5 }, (_, i) => (
							<i key={i} className={`fas fa-star ${i < Math.floor(company.rating) ? "text-yellow-400" : "text-gray-300"}`}></i>
						))}
						<span className="text-gray-600 ml-2">{company.rating}</span>
					</div>
					<p className="text-gray-600 text-sm mb-4">{company.description}</p>
					<button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
						مشاهده شرکت
					</button>
				</div>
			))}
		</div>
	);
}

function Reviews() {
	return (
		<div className="space-y-6">
			{reviewsData.map((review, idx) => (
				<div key={idx} className="bg-white rounded-lg shadow-sm p-6">
					<div className="flex justify-between mb-4">
						<div>
							<h4 className="font-semibold text-gray-800">{review.author}</h4>
							<p className="text-gray-500 text-sm">{review.company}</p>
						</div>
						<div className="flex items-center">
							{Array.from({ length: 5 }, (_, i) => (
								<i key={i} className={`fas fa-star ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}></i>
							))}
						</div>
					</div>
					<div className="mb-3">
						<h3 className="font-medium text-gray-800">{review.title}</h3>
						<p className="text-gray-600">{review.content}</p>
					</div>
					<div className="flex justify-between items-center text-sm text-gray-500">
						<span>{review.date}</span>
						<div className="flex space-x-4">
							<button className="hover:text-blue-600">
								<i className="far fa-thumbs-up mr-1"></i> مفید بود
							</button>
							<button className="hover:text-blue-600">
								<i className="far fa-comment mr-1"></i> نظر
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

function AboutUs({ companyData }) {
	const [openFAQ, setOpenFAQ] = useState(null);
	return (
		<>
			{/* //! */}
			{/* Company Summary */}
			<div className="bg-white rounded-xl shadow-sm p-6 mb-6">
				<h2 className="text-2xl font-bold text-gray-800 mb-4">خلاصه شرکت</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="flex items-start">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-building text-blue-600"></i>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">تأسیس</h3>
							<p className="text-gray-600">
								{typeof companyData.founded === "string" && companyData.founded.includes("T")
									? new Date(companyData.founded).getFullYear()
									: companyData.founded}
							</p>
						</div>
					</div>
					<div className="flex items-start">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-map-marked-alt text-blue-600"></i>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">دفتر مرکزی</h3>
							<p className="text-gray-600">{companyData.headquarters}</p>
						</div>
					</div>
					<div className="flex items-start">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-users text-blue-600"></i>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">تعداد کارکنان</h3>
							<p className="text-gray-600">{companyData.employees}</p>
						</div>
					</div>
					<div className="flex items-start">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-globe-americas text-blue-600"></i>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">وب‌سایت</h3>
							<a href="#" className="text-blue-600 hover:underline">
								{companyData.website}
							</a>
						</div>
					</div>
					<div className="flex items-start">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-phone-alt text-blue-600"></i>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">تماس</h3>
							<p className="text-gray-600">{companyData.contact}</p>
						</div>
					</div>
					<div className="flex items-start">
						<div className="bg-blue-100 p-3 rounded-lg mr-4">
							<i className="fas fa-industry text-blue-600"></i>
						</div>
						<div>
							<h3 className="font-semibold text-gray-800">صنعت</h3>
							<p className="text-gray-600">{companyData.industry}</p>
						</div>
					</div>
				</div>
			</div>
			{/* Company Details */}
			<div className="bg-white rounded-xl shadow-sm p-6 mb-6">
				<h2 className="text-2xl font-bold text-gray-800 mb-4">جزئیات شرکت</h2>
				<div className="prose max-w-none text-gray-700">
					<p>{companyData.description}</p>
					<p>
						ماموریت ما توانمندسازی کسب‌وکارها از طریق فناوری است؛ ارائه راهکارهای نرم‌افزاری پیشرفته، خدمات ابری و مشاوره تحول دیجیتال.
						تخصص ما:
					</p>
					<ul>{companyData.details && companyData.details.map((detail, idx) => <li key={idx}>{detail}</li>)}</ul>
					<p>{companyData.fullDescription}</p>
				</div>
			</div>
			{/* FAQ Section */}
			<div className="bg-white rounded-xl shadow-sm p-6">
				<h2 className="text-2xl font-bold text-gray-800 mb-6">سوالات متداول</h2>
				<div className="space-y-4">
					{faqData.map((faq, idx) => (
						<FAQItem key={idx} faq={faq} open={openFAQ === idx} onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)} />
					))}
				</div>
			</div>
		</>
	);
}

function Support() {
	return (
		<div className="bg-white rounded-xl shadow-sm p-6">
			<h2 className="text-2xl font-bold text-gray-800 mb-6">مرکز پشتیبانی</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="bg-gray-50 p-6 rounded-lg">
					<div className="flex items-center mb-4">
						<div className="bg-blue-100 p-3 rounded-lg ml-4">
							<i className="fas fa-headset text-blue-600"></i>
						</div>
						<h3 className="text-xl font-semibold text-gray-800">پشتیبانی مشتریان</h3>
					</div>
					<p className="text-gray-600 mb-4">تیم پشتیبانی ما آماده پاسخگویی به سوالات و مشکلات شماست.</p>
					<div className=" md:space-x-reverse md:space-y-3">
						<div className="flex items-center">
							<i className="fas fa-phone-alt text-blue-500 mr-3"></i>
							<span className="text-gray-700">+1 (555) 123-4567</span>
						</div>
						<div className="flex items-center">
							<i className="fas fa-envelope text-blue-500 mr-3"></i>
							<span className="text-gray-700">support@techsolutions.com</span>
						</div>
						<div className="flex items-center">
							<i className="fas fa-clock text-blue-500 mr-3"></i>
							<span className="text-gray-700">Mon-Fri: 8AM - 8PM EST</span>
						</div>
					</div>
				</div>
				<div className="bg-gray-50 p-6 rounded-lg">
					<div className="flex items-center mb-4">
						<div className="bg-blue-100 p-3 rounded-lg ml-4">
							<i className="fas fa-book text-blue-600"></i>
						</div>
						<h3 className="text-xl font-semibold text-gray-800">پایگاه دانش</h3>
					</div>
					<p className="text-gray-600 mb-4">مستندات کامل ما را مرور کنید و پاسخ سوالات متداول را بیابید.</p>
					<div className="space-y-3">
						<a href="#" className="flex items-center text-blue-600 hover:underline">
							<i className="fas fa-file-alt mr-3"></i>
							<span>راهنمای شروع</span>
						</a>
						<a href="#" className="flex items-center text-blue-600 hover:underline">
							<i className="fas fa-video mr-3"></i>
							<span>آموزش ویدیویی</span>
						</a>
						<a href="#" className="flex items-center text-blue-600 hover:underline">
							<i className="fas fa-question-circle mr-3"></i>
							<span>رفع مشکلات رایج</span>
						</a>
					</div>
				</div>
			</div>
			<div className="mt-8 bg-gray-50 p-6 rounded-lg">
				<h3 className="text-xl font-semibold text-gray-800 mb-4">یک تیکت پشتیبانی ارسال کنید</h3>
				<form className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
								نام
							</label>
							<input
								type="text"
								id="name"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
								ایمیل
							</label>
							<input
								type="email"
								id="email"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
							موضوع
						</label>
						<input
							type="text"
							id="subject"
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div>
						<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
							پیام
						</label>
						<textarea
							id="message"
							rows={4}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
						></textarea>
					</div>
					<button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
						ارسال تیکت
					</button>
				</form>
			</div>
		</div>
	);
}

export default function CompanyPage() {
	const location = useLocation();
	const [activeTab, setActiveTab] = useState("about");
	const [following, setFollowing] = useState(false);

	// Use company data from location.state if available, otherwise fallback
	const companyData = location.state?.company || defaultCompanyData;

	const tabList = [
		{ id: "about", label: "درباره ما" },
		{ id: "support", label: "پشتیبانی" },
		{ id: "employees", label: "کارمندان" },
		{ id: "posts", label: "پست‌ها" },
		{ id: "news", label: "اخبار و رویدادها" },
		{ id: "similar", label: "شرکت‌های مشابه" },
		{ id: "reviews", label: "نظرات" },
	];

	return (
		<div className="bg-gray-50 font-sans min-h-screen">
			<div className="container mx-auto px-4 py-8 max-w-6xl">
				{/* Header Section */}
				<header className=" bg-white rounded-xl shadow-md overflow-hidden mb-8">
					<div className="md:flex">
						<div className="md:w-1/4 p-6 flex justify-center">
							<img
								src={companyData.logo || "https://via.placeholder.com/300"}
								alt="Company Logo"
								className="w-48 h-48 object-cover rounded-lg shadow-sm"
							/>
						</div>
						<div className="md:w-3/4 p-6">
							<div className="flex flex-col h-full justify-between">
								<div>
									<div className="flex items-center mb-2">
										<h1 className="text-3xl font-bold text-gray-800">{companyData.name}</h1>
										<span className="mr-4 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
											{companyData.category}
										</span>
									</div>
									<p className="text-gray-600 mb-4">{companyData.description}</p>
									<div className="flex flex-wrap gap-4 mb-4">
										<div className="flex items-center text-gray-600">
											<i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
											<span>{companyData.location || companyData.headquarters || "Location"}</span>
										</div>
										<div className="flex items-center text-gray-600">
											<i className="fas fa-globe mr-2 text-blue-500"></i>
											<a href="#" className="text-blue-600 hover:underline">
												{companyData.website}
											</a>
										</div>
										<div className="flex items-center text-gray-600">
											<i className="fas fa-users mr-2 text-blue-500"></i>
											<span>{companyData.employees} Employees</span>
										</div>
										<div className="flex items-center text-gray-600">
											<i className="fas fa-star mr-2 text-blue-500"></i>
											<span>{companyData.rating ? `${companyData.rating} (امتیاز)` : "۴.۸ (۱۲۰ امتیاز)"}</span>
										</div>
									</div>
								</div>
								<div className="flex flex-wrap gap-4 mt-4">
									<button
										className={`follow-btn px-6 py-2 rounded-lg transition flex items-center ${
											following ? "bg-green-400" : "bg-blue-600 text-white hover:bg-blue-700"
										}`}
										onClick={() => setFollowing((f) => !f)}
									>
										<i className={`fas ${following ? "fa-check" : "fa-plus"} mr-2`}></i>
										{following ? "دنبال می‌کنید" : "دنبال کن"}
									</button>
									<button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center">
										<i className="fas fa-info-circle mr-2"></i> اطلاعات بیشتر
									</button>
									<div className="flex items-center ml-auto">
										<a href="#" className="text-gray-500 hover:text-blue-500 mx-3">
											<i className="fab fa-facebook-f"></i>
										</a>
										<a href="#" className="text-gray-500 hover:text-blue-400 mx-3">
											<i className="fab fa-twitter"></i>
										</a>
										<a href="#" className="text-gray-500 hover:text-red-500 mx-3">
											<i className="fab fa-linkedin-in"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

				{/* Tabs Navigation */}
				<div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
					<div className="overflow-x-auto">
						<nav className="flex flex-nowrap md:space-x-reverse md:space-x-4 px-4" style={{ whiteSpace: "nowrap" }}>
							{tabList.map((tab) => (
								<TabButton key={tab.id} label={tab.label} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)} />
							))}
						</nav>
					</div>
				</div>

				{/* Tab Content */}
				<div className="tab-content-container">
					{activeTab === "about" && <AboutUs companyData={companyData} />}
					{activeTab === "support" && <Support />}
					{activeTab === "employees" && <Employees />}
					{activeTab === "posts" && <Posts />}
					{activeTab === "news" && <News />}
					{activeTab === "similar" && <SimilarCompanies />}
					{activeTab === "reviews" && <Reviews />}
				</div>
			</div>
		</div>
	);
}
