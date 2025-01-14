// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const my_theme: CustomThemeConfig = {
	name: 'my_theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "2px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #016cdf 
		"--color-primary-50": "217 233 250", // #d9e9fa
		"--color-primary-100": "204 226 249", // #cce2f9
		"--color-primary-200": "192 218 247", // #c0daf7
		"--color-primary-300": "153 196 242", // #99c4f2
		"--color-primary-400": "77 152 233", // #4d98e9
		"--color-primary-500": "1 108 223", // #016cdf
		"--color-primary-600": "1 97 201", // #0161c9
		"--color-primary-700": "1 81 167", // #0151a7
		"--color-primary-800": "1 65 134", // #014186
		"--color-primary-900": "0 53 109", // #00356d
		// secondary | #8f8f8f 
		"--color-secondary-50": "238 238 238", // #eeeeee
		"--color-secondary-100": "233 233 233", // #e9e9e9
		"--color-secondary-200": "227 227 227", // #e3e3e3
		"--color-secondary-300": "210 210 210", // #d2d2d2
		"--color-secondary-400": "177 177 177", // #b1b1b1
		"--color-secondary-500": "143 143 143", // #8f8f8f
		"--color-secondary-600": "129 129 129", // #818181
		"--color-secondary-700": "107 107 107", // #6b6b6b
		"--color-secondary-800": "86 86 86", // #565656
		"--color-secondary-900": "70 70 70", // #464646
		// tertiary | #8f8f8f 
		"--color-tertiary-50": "238 238 238", // #eeeeee
		"--color-tertiary-100": "233 233 233", // #e9e9e9
		"--color-tertiary-200": "227 227 227", // #e3e3e3
		"--color-tertiary-300": "210 210 210", // #d2d2d2
		"--color-tertiary-400": "177 177 177", // #b1b1b1
		"--color-tertiary-500": "143 143 143", // #8f8f8f
		"--color-tertiary-600": "129 129 129", // #818181
		"--color-tertiary-700": "107 107 107", // #6b6b6b
		"--color-tertiary-800": "86 86 86", // #565656
		"--color-tertiary-900": "70 70 70", // #464646
		// success | #597935 
		"--color-success-50": "230 235 225", // #e6ebe1
		"--color-success-100": "222 228 215", // #dee4d7
		"--color-success-200": "214 222 205", // #d6decd
		"--color-success-300": "189 201 174", // #bdc9ae
		"--color-success-400": "139 161 114", // #8ba172
		"--color-success-500": "89 121 53", // #597935
		"--color-success-600": "80 109 48", // #506d30
		"--color-success-700": "67 91 40", // #435b28
		"--color-success-800": "53 73 32", // #354920
		"--color-success-900": "44 59 26", // #2c3b1a
		// warning | #ca8321 
		"--color-warning-50": "247 236 222", // #f7ecde
		"--color-warning-100": "244 230 211", // #f4e6d3
		"--color-warning-200": "242 224 200", // #f2e0c8
		"--color-warning-300": "234 205 166", // #eacda6
		"--color-warning-400": "218 168 100", // #daa864
		"--color-warning-500": "202 131 33", // #ca8321
		"--color-warning-600": "182 118 30", // #b6761e
		"--color-warning-700": "152 98 25", // #986219
		"--color-warning-800": "121 79 20", // #794f14
		"--color-warning-900": "99 64 16", // #634010
		// error | #c93126 
		"--color-error-50": "247 224 222", // #f7e0de
		"--color-error-100": "244 214 212", // #f4d6d4
		"--color-error-200": "242 204 201", // #f2ccc9
		"--color-error-300": "233 173 168", // #e9ada8
		"--color-error-400": "217 111 103", // #d96f67
		"--color-error-500": "201 49 38", // #c93126
		"--color-error-600": "181 44 34", // #b52c22
		"--color-error-700": "151 37 29", // #97251d
		"--color-error-800": "121 29 23", // #791d17
		"--color-error-900": "98 24 19", // #621813
		// surface | #bcbac4 
		"--color-surface-50": "245 245 246", // #f5f5f6
		"--color-surface-100": "242 241 243", // #f2f1f3
		"--color-surface-200": "238 238 240", // #eeeef0
		"--color-surface-300": "228 227 231", // #e4e3e7
		"--color-surface-400": "208 207 214", // #d0cfd6
		"--color-surface-500": "188 186 196", // #bcbac4
		"--color-surface-600": "169 167 176", // #a9a7b0
		"--color-surface-700": "141 140 147", // #8d8c93
		"--color-surface-800": "113 112 118", // #717076
		"--color-surface-900": "92 91 96", // #5c5b60
		
	}
}
