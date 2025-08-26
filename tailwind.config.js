/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary_primary: "#0D6EFD",
				primary_tint_7: "#438EFD",
				primary_tint_5: "#79AEFE",
				primary_tint_3: "#AECFFE",
				primary_tint_1: "#E4EFFF",
				primary_shade_1: "#0260EB",
				primary_shade_3: "#0148B0",
				primary_shade_5: "#013075",
				primary_shade_7: "#00183B",
				secondary_secondary: "#FFC51A",
				secondary_tint_7: "#FFD24D",
				secondary_tint_5: "#FFDF80",
				secondary_tint_3: "#FFECB3",
				secondary_tint_1: "#FFF9E6",
				secondary_shade_1: "#FABB00",
				secondary_shade_3: "#BB8C00",
				secondary_shade_5: "#7D5D00",
				secondary_shade_7: "#3E2F00",
				neutral_gray_1: "#E9EAEE",
				neutral_gray_2: "#CBCED7",
				neutral_gray_3: "#AEB2C0",
				neutral_gray_4: "#9095AA",
				neutral_gray_5: "#737993",
				neutral_gray_6: "#5B6176",
				neutral_gray_8: "#2E303B",
				neutral_neutral1_black: "#0F0F0F",
				state_error_err: "#DC3545",
				state_error_background_err: "#FFEEF0",
				state_success_suc: "#28A745",
				state_success_background_suc: "#D8FFE1",
				state_warning_war: "#FFBE00",
				state_warning_background_war: "#FFF1C9",
			},
			maxWidth: {
				container: "1200px",
			},
			gridTemplateColumns: {
				12: "repeat(12, minmax(0, 1fr))", // دسکتاپ
				4: "repeat(4, minmax(0, 1fr))", // موبایل
			},
			spacing: {
				4: "16px", // gutter موبایل
				6: "24px", // gutter دسکتاپ
			},
			fontSize: {
				// Display Font Size
				"display-2": ["56px", { lineHeight: "120%", fontWeight: "bold" }],
				"display-1": ["64px", { lineHeight: "140%", fontWeight: "bold" }],

				// Heading Font Size
				"h-1": ["44px", { lineHeight: "140%", fontWeight: "bold" }],
				"h-2": ["40px", { lineHeight: "140%", fontWeight: "bold" }],
				"h-3": ["32px", { lineHeight: "140%", fontWeight: "bold" }],
				"h-4": ["24px", { lineHeight: "140%", fontWeight: "bold" }],
				"h-5": ["20px", { lineHeight: "140%", fontWeight: "bold" }],
				"h-6": ["16px", { lineHeight: "140%", fontWeight: "bold" }],

				// Body Font Size

				"body-3xlg": ["44px", { lineHeight: "140%", fontWeight: "medium" }],
				"body-2xlg": ["40px", { lineHeight: "140%", fontWeight: "medium" }],
				"body-xlg": ["32px", { lineHeight: "140%", fontWeight: "medium" }],
				"body-lg": ["28px", { lineHeight: "180%", fontWeight: "regular" }],
				"body-md": ["24px", { lineHeight: "180%", fontWeight: "medium" }],
				"body-smd": ["24px", { lineHeight: "180%", fontWeight: "regular" }],
				"body-regular": ["20px", { lineHeight: "180%", fontWeight: "regular" }],
				"body-s": ["18px", { lineHeight: "180%", fontWeight: "regular" }],
				"body-xs": ["16px", { lineHeight: "180%", fontWeight: "regular" }],
				"body-xxs": ["14px", { lineHeight: "180%", fontWeight: "regular" }],

				// Caption
				"caption-lg": ["14px", { lineHeight: "180%", fontWeight: "bold" }],
				"caption-md": ["12px", { lineHeight: "180%", fontWeight: "regular" }],

				// Button

				"button-xlg": ["18px", { lineHeight: "180%", fontWeight: "medium" }],
				"button-lg": ["16px", { lineHeight: "180%", fontWeight: "medium" }],
				"button-md": ["14px", { lineHeight: "180%", fontWeight: "medium" }],
				"button-s": ["12px", { lineHeight: "180%", fontWeight: "medium" }],
			},
		},
	},
	plugins: [],
};
