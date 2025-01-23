import {
	fallbackCardEnalrgeScale,
	fallbackCardEnalrgeDuration,
	fallbackCardBorderRadius,
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

/**
 * Convert getCardEnlargeScaleValue from string to number
 * @param {*} value in `string` e.g 1.2
 * @returns
 * - `number` if value can be parsed to float
 * - return fallback value if value is `undefined`
 * - return `1` if value can not be parsed to float
 */
export const getCardEnlargeScaleValue = (value) => {
	if (value === undefined) return fallbackCardEnalrgeScale;
	let parsedValue = parseFloat(value);
	if (!isNaN(parsedValue)) {
		return parsedValue;
	}
	return 1;
};

/**
 * Convert getCardBorderRadiusValue from string to number
 * @param {*} value in `string` e.g 1
 * @returns
 * - `number` if value can be parsed to int
 * - return fallback value if value is `undefined`
 * - return `1` if value can not be parsed to int
 */
export const getCardBorderRadiusValue = (value) => {
	if (value === undefined) return fallbackCardBorderRadius;
	let parsedValue = parseInt(value);
	if (!isNaN(parsedValue)) {
		return parsedValue;
	}
	return 0;
};

/**
 * Clamp value between 1 ~ infinity
 * @param {*} value
 * @param {*} fallback
 * @returns clamped value
 */
export const clamp1Inf = (value, fallback = 1.0) => {
	if (isNaN(value) || value === undefined || value === null) return fallback;
	return Math.max(1.0, value);
};

/**
 * Clamp value between 0.0 ~ infinity
 * @param {*} value
 * @param {*} fallback
 * @returns clamped value
 */
export const clamp0Inf = (value, fallback = 0.0) => {
	if (isNaN(value) || value === undefined || value === null) return fallback;
	return Math.max(0.0, value);
};
