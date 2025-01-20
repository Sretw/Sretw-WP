import {
	fallbackCardEnalrgeScale,
	fallbackCardEnalrgeDuration,
} from "./constant";

/**
 * Convert getCardEnlargeDurationValue from string to number
 * @param {*} value in `string` e.g 1.2s
 * @returns
 * - `number` if value can be parsed to float
 * - return fallback value if value is `undefined`
 * - return `0` if value can not be parsed to float
 */
export const getCardEnlargeDurationValue = (value) => {
	if (value === undefined) return fallbackCardEnalrgeDuration;
	let parsedValue = parseFloat(value);
	if (!isNaN(parsedValue)) {
		return parsedValue;
	}
	return 0;
};

export const getCardEnlargeScaleValue = (value) => {
	if (value === undefined) return fallbackCardEnalrgeScale;
	let parsedValue = parseFloat(value);
	if (!isNaN(parsedValue)) {
		return parsedValue;
	}
	return 1;
};

export const clamp1Inf = (value, fallback = 1.0) => {
	if (isNaN(value) || value === undefined || value === null) return fallback;
	return Math.max(1.0, value);
};

export const clamp0Inf = (value, fallback = 0.0) => {
	if (isNaN(value) || value === undefined || value === null) return fallback;
	return Math.max(0.0, value);
};
