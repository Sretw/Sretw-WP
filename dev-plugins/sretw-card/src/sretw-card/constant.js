import { __ } from "@wordpress/i18n";

/**
 * Admin panel font size options
 */
export const fontSizes = [
	{
		name: __("S"),
		slug: "small",
		size: 13,
	},
	{
		name: __("M"),
		slug: "medium",
		size: 20,
	},
	{
		name: __("L"),
		slug: "big",
		size: 36,
	},
];

/**
 * Fallback font size
 */
export const fallbackFontSize = 12;

/**
 * Admin panel font weight options
 */
export const fontWeights = [
	{
		label: "normal",
		value: "normal",
	},
	{
		label: "bold",
		value: "bold",
	},
	{
		label: "lighter",
		value: "lighter",
	},
	{
		label: "bolder",
		value: "bolder",
	},
	{
		label: "100",
		value: "100",
	},
	{
		label: "200",
		value: "200",
	},
	{
		label: "300",
		value: "300",
	},
	{
		label: "400",
		value: "400",
	},
	{
		label: "500",
		value: "500",
	},
	{
		label: "600",
		value: "600",
	},
	{
		label: "700",
		value: "700",
	},
	{
		label: "800",
		value: "800",
	},
	{
		label: "900",
		value: "900",
	},
	{
		label: "inherit",
		value: "inherit",
	},
	{
		label: "initial",
		value: "initial",
	},
	{
		label: "revert",
		value: "revert",
	},
	{
		label: "revert-layer",
		value: "revert-layer",
	},
	{
		label: "unset",
		value: "unset",
	},
];

/**
 * Fallback font weight
 */
export const fallbackFontWeight = "normal";

/**
 * Fallback card enlarge scale when mouse hover
 */
export const fallbackCardEnalrgeScale = 1.2;

/**
 * Fallback card enlarge duration for transition
 * when mouse hover
 */
export const fallbackCardEnalrgeDuration = 0.65;
