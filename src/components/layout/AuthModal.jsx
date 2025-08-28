import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function AuthModal({ isOpen, onClose }) {
	const [isLogin, setIsLogin] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [errors, setErrors] = useState({});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [authError, setAuthError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	// قفل اسکرول پس‌زمینه وقتی مودال بازه
	useEffect(() => {
		if (!isOpen) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [isOpen]);

	// بستن با کلید Escape
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === "Escape" && isOpen) onClose();
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const validateForm = () => {
		const newErrors = {};
		if (!formData.email) newErrors.email = "ایمیل الزامی است";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "لطفاً یک ایمیل معتبر وارد کنید";

		if (!formData.password) newErrors.password = "رمز عبور الزامی است";
		else if (formData.password.length < 6) newErrors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد";

		if (!isLogin) {
			if (!formData.name) newErrors.name = "نام الزامی است";
			if (!formData.confirmPassword) newErrors.confirmPassword = "تکرار رمز عبور الزامی است";
			else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "رمزهای عبور مطابقت ندارند";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((p) => ({ ...p, [name]: value }));
		if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setAuthError("");
		setSuccessMessage("");
		if (!validateForm()) return;

		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			if (isLogin) {
				setSuccessMessage("ورود موفقیت‌آمیز بود! در حال انتقال ...");
				setTimeout(() => {
					onClose();
					setSuccessMessage("");
				}, 1200);
			} else {
				setSuccessMessage("حساب کاربری با موفقیت ایجاد شد! اکنون می‌توانید وارد شوید.");
				setIsLogin(true);
				setFormData({ name: "", email: "", password: "", confirmPassword: "" });
			}
		}, 1200);
	};

	const toggleAuthMode = () => {
		setIsLogin((v) => !v);
		setErrors({});
		setAuthError("");
		setSuccessMessage("");
	};

	const modal = (
		<div
			className="fixed inset-0 z-[1000] grid place-items-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm"
			role="dialog"
			aria-modal="true"
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
		>
			<div className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden max-h-[90vh]">
				<div className="max-h-[90vh] overflow-y-auto">
					<div className="p-4 sm:p-6">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-xl sm:text-2xl font-bold text-gray-800">{isLogin ? "ورود" : "ایجاد حساب کاربری"}</h2>
							<button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition">
								<i className="fas fa-times text-xl" />
							</button>
						</div>

						{/* سوییچ */}
						<div className="flex mb-6 bg-slate-100  text-[#F1F1F1] rounded-lg p-1">
							<button
								onClick={() => setIsLogin(true)}
								className={`flex-1 py-2 px-4 rounded-lg font-medium ${
									isLogin ? "bg-[#0E1f4b]  text-[#F1F1F1]" : "text-gray-600 hover:text-gray-800"
								}`}
							>
								ورود
							</button>
							<button
								onClick={() => setIsLogin(false)}
								className={`flex-1 py-2 px-4 rounded-lg font-medium ${
									!isLogin ? "bg-[#0E1f4b]  text-[#F1F1F1]" : "text-gray-600 hover:text-gray-800"
								}`}
							>
								ثبت‌ نام
							</button>
						</div>

						{authError && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">{authError}</div>}
						{successMessage && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">{successMessage}</div>}

						<form onSubmit={handleSubmit}>
							{!isLogin && (
								<div className="mb-4">
									<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
										نام کامل
									</label>
									<div className="relative">
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											className={`w-full px-4 py-3 text-sm sm:text-base border rounded-lg ${
												errors.name ? "border-red-500" : "border-gray-300"
											}`}
											placeholder="نام و نام خانوادگی"
										/>
										<div className="absolute left-3 top-3 text-gray-400">
											<i className="fas fa-user" />
										</div>
									</div>
									{errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
								</div>
							)}

							<div className="mb-4">
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
									ایمیل
								</label>
								<div className="relative">
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className={`w-full px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
										placeholder="ایمیل شما"
									/>
									<div className="absolute left-3 top-3 text-gray-400">
										<i className="fas fa-envelope" />
									</div>
								</div>
								{errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
							</div>

							<div className="mb-4">
								<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
									رمز عبور
								</label>
								<div className="relative">
									<input
										type={showPassword ? "text" : "password"}
										id="password"
										name="password"
										value={formData.password}
										onChange={handleChange}
										className={`w-full px-4 py-2 border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"}`}
										placeholder="••••••••"
									/>
									<button
										type="button"
										onClick={() => setShowPassword((v) => !v)}
										className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
									>
										<i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
									</button>
								</div>
								{errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
							</div>

							{!isLogin && (
								<div className="mb-6">
									<label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
										تکرار رمز عبور
									</label>
									<div className="relative">
										<input
											type={showConfirmPassword ? "text" : "password"}
											id="confirmPassword"
											name="confirmPassword"
											value={formData.confirmPassword}
											onChange={handleChange}
											className={`w-full px-4 py-2 border rounded-lg ${
												errors.confirmPassword ? "border-red-500" : "border-gray-300"
											}`}
											placeholder="••••••••"
										/>
										<button
											type="button"
											onClick={() => setShowConfirmPassword((v) => !v)}
											className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
										>
											<i className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`} />
										</button>
									</div>
									{errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
								</div>
							)}

							{isLogin && (
								<div className="flex items-center justify-between mb-6">
									<label className="flex items-center gap-2 text-sm text-gray-700">
										<input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
										مرا به خاطر بسپار
									</label>
									<a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
										رمز عبور را فراموش کرده‌اید؟
									</a>
								</div>
							)}

							<button
								type="submit"
								disabled={isLoading}
								className="w-full bg-[#0E1f4b]  text-[#F1F1F1]  font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
							>
								{isLoading ? (
									<>
										<svg
											className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											/>
										</svg>
										{isLogin ? "در حال ورود..." : "در حال ایجاد حساب..."}
									</>
								) : isLogin ? (
									"ورود"
								) : (
									"ثبت‌نام"
								)}
							</button>
						</form>
					</div>

					<div className="bg-gray-50 px-4 sm:px-6 py-4 border-t border-gray-200">
						<p className="text-sm text-gray-600 text-center">
							{isLogin ? "حساب کاربری ندارید؟ " : "قبلاً حساب ساخته‌اید؟ "}
							<button onClick={toggleAuthMode} className="font-medium text-indigo-600 hover:text-indigo-500">
								{isLogin ? "ثبت‌نام" : "ورود"}
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);

	// پورتال برای حذف هرگونه محدودیت والد (z-index/transform/overflow)
	return createPortal(modal, document.body);
}
