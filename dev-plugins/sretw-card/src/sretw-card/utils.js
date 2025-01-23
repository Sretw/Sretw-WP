import {
	fallbackCardShadowHorizontal,
	fallbackCardShadowVertical,
	fallbackCardShadowBlur,
	fallbackCardShadowSpread,
	fallbackCardShadowColor,
} from "./constant";

/**
 * Convert string to integer
 * @param {*} value in string e.g "12px"
 * @param {*} fallback value to fallback to when conversion fail
 * @returns integer or fallback value
 */
export const stringToInt = (value, fallback = 0) => {
	if (value === undefined) return fallback;
	let parsedValue = parseInt(value);
	if (!isNaN(parsedValue)) {
		return parsedValue;
	}
	return fallback;
};

/**
 * Convert string to float
 * @param {*} value in string e.g "10.4ms"
 * @param {*} fallback value to fallback to when conversion fail
 * @returns float or fallback value
 */
export const stringToFloat = (value, fallback = 0.0) => {
	if (value === undefined) return fallback;
	let parsedValue = parseFloat(value);
	if (!isNaN(parsedValue)) {
		return parsedValue;
	}
	return fallback;
};

/**
 * Get css for box-shadow in string
 * @param {*} h horizontal in px
 * @param {*} v vertical in px
 * @param {*} sBlur blur in px
 * @param {*} spread spread in px
 * @param {*} color hex value
 * @returns string in css for box-shadow
 */
export const getCardShadowCSSProp = (h, v, sBlur, spread, color) => {
	let sHorizontal = h ? h : `${fallbackCardShadowHorizontal}px`;
	let sVertial = v ? v : `${fallbackCardShadowVertical}px`;
	let sBlurring = sBlur ? sBlur : `${fallbackCardShadowBlur}px`;
	let sSpread = spread ? spread : `${fallbackCardShadowSpread}px`;
	let sColor = color ? color : fallbackCardShadowColor;
	return `${sHorizontal} ${sVertial} ${sBlurring} ${sSpread} ${sColor}`;
};

/**
 * Clamp value between 1 ~ infinity
 * @param {*} value number
 * @param {*} fallback the number to fallback to
 * @returns clamped value
 */
export const clamp1Inf = (value, fallback = 1.0) => {
	if (isNaN(value) || value === undefined || value === null) return fallback;
	return Math.max(1.0, value);
};

/**
 * Clamp value between 0.0 ~ infinity
 * @param {*} value number
 * @param {*} fallback the number to fallback to
 * @returns clamped value
 */
export const clamp0Inf = (value, fallback = 0.0) => {
	if (isNaN(value) || value === undefined || value === null) return fallback;
	return Math.max(0.0, value);
};
