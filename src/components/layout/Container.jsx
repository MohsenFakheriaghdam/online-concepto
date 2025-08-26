// src/components/layout/Container.jsx

export default function Container({ children, className = "" }) {
	return <div className={`container grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6 ${className}`}>{children}</div>;
}
