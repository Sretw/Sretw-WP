/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InnerBlocks,
	InspectorControls,
	AlignmentToolbar,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";

import {
	FontSizePicker,
	PanelBody,
	TextControl,
	Flex,
	FlexItem,
	SelectControl,
	ColorPicker,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { ToggleControl } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import {
	clamp0Inf,
	clamp1Inf,
	stringToInt,
	getCardShadowCSSProp,
	stringToFloat,
} from "./utils";
import {
	fontSizes,
	fallbackFontSize,
	fontWeights,
	fallbackFontWeight,
	fallbackCardEnalrgeScale,
	fallbackCardEnalrgeDuration,
	fallbackCardBorderRadius,
	fallbackCardShadowHorizontal,
	fallbackCardShadowVertical,
	fallbackCardShadowBlur,
	fallbackCardShadowSpread,
	fallbackCardShadowColor,
} from "./constant";
import { MenuGroup } from "@wordpress/components";

export default function Edit(props) {
	const {
		attributes: {
			title,
			titleFontSize,
			titleFontWeight,
			titleAlignment,
			subtitle,
			subtitleFontSize,
			subtitleFontWeight,
			subtitleAlignment,
			cardEnlarge,
			cardEnlargeScale,
			cardEnlargeDuration,
			cardBorderRadius,
			cardShadowHorizontal,
			cardShadowVertical,
			cardShadowBlur,
			cardShadowSpread,
			cardShadowColor,
		},
		setAttributes,
	} = props;

	/**
	 * Block combine with dynamic value
	 * Look into style.scss
	 */
	const blockProps = useBlockProps({
		className: cardEnlarge
			? "wp-block-create-block-sretw-card-hover"
			: "wp-block-create-block-sretw-card",
		style: {
			"--card-shadow-prop": getCardShadowCSSProp(
				cardShadowHorizontal,
				cardShadowVertical,
				cardShadowBlur,
				cardShadowSpread,
				cardShadowColor,
			),
			"--card-border-radius": cardBorderRadius
				? cardBorderRadius
				: `${fallbackCardBorderRadius}px`,
			// Setting card enalrge scale variable in scss
			"--card-enlarge-scale": cardEnlargeScale
				? cardEnlargeScale
				: `${fallbackCardEnalrgeScale}`,
			// Setting card enalrge duration variable in scss
			"--card-enlarge-duration": cardEnlargeDuration
				? cardEnlargeDuration
				: `${fallbackCardEnalrgeDuration}s`,
		},
	});
	const innerBlockProps = useInnerBlocksProps();
	// console.log(props);

	return (
		<>
			{/* for admin control panel */}
			<InspectorControls>
				{/* General card setting */}
				<PanelBody title={__("Card", "sretw-card")} initialOpen={false}>
					<MenuGroup label={__("Box shadow")}>
						<Flex wrap>
							<FlexItem>
								<TextControl
									__next40pxDefaultSize
									__nextHasNoMarginBottom
									label={__("Horizontal", "srewt-card")}
									type="number"
									value={stringToInt(
										cardShadowHorizontal,
										fallbackCardShadowHorizontal,
									)}
									onChange={(value) =>
										setAttributes({
											cardShadowHorizontal: `${clamp0Inf(value)}px`,
										})
									}
								/>
							</FlexItem>
							<FlexItem>
								<TextControl
									__next40pxDefaultSize
									__nextHasNoMarginBottom
									label={__("Vertical", "srewt-card")}
									type="number"
									value={stringToInt(
										cardShadowVertical,
										fallbackCardShadowVertical,
									)}
									onChange={(value) =>
										setAttributes({
											cardShadowVertical: `${clamp0Inf(value)}px`,
										})
									}
								/>
							</FlexItem>
							<FlexItem>
								<TextControl
									__next40pxDefaultSize
									__nextHasNoMarginBottom
									label={__("Blur", "srewt-card")}
									type="number"
									value={stringToInt(cardShadowBlur, fallbackCardShadowBlur)}
									onChange={(value) =>
										setAttributes({ cardShadowBlur: `${clamp0Inf(value)}px` })
									}
								/>
							</FlexItem>
							<FlexItem>
								<TextControl
									__next40pxDefaultSize
									__nextHasNoMarginBottom
									label={__("Spread", "srewt-card")}
									type="number"
									value={stringToInt(
										cardShadowSpread,
										fallbackCardShadowSpread,
									)}
									onChange={(value) =>
										setAttributes({ cardShadowSpread: `${clamp0Inf(value)}px` })
									}
								/>
							</FlexItem>
							<FlexItem>
								<ColorPicker
									defaultValue={
										cardShadowColor ? cardShadowColor : fallbackCardShadowColor
									}
									onChange={(value) =>
										setAttributes({ cardShadowColor: value })
									}
								/>
							</FlexItem>
						</Flex>
					</MenuGroup>
					<MenuGroup label={__("Border", "sretw-card")}>
						<TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={__("Border radius", "srewt-card")}
							type="number"
							value={stringToInt(cardBorderRadius, fallbackCardBorderRadius)}
							onChange={(value) =>
								setAttributes({ cardBorderRadius: `${clamp0Inf(value)}px` })
							}
						/>
					</MenuGroup>
					<MenuGroup label={__("Hover", "sretw-card")}>
						<ToggleControl
							__nextHasNoMarginBottom
							label={__("Hover enlarge", "sretw-card")}
							checked={cardEnlarge || false}
							onChange={(value) =>
								setAttributes({
									cardEnlarge: value,
									//pre-set value for scale
									cardEnlargeScale: cardEnlargeScale
										? `${cardEnlargeScale}`
										: `${fallbackCardEnalrgeScale}`,
									// pre-set value for speed
									cardEnlargeDuration: cardEnlargeDuration
										? cardEnlargeDuration
										: `${fallbackCardEnalrgeDuration}s`,
								})
							}
						/>
						{cardEnlarge && (
							<>
								<TextControl
									__next40pxDefaultSize
									__nextHasNoMarginBottom
									label={__("Hover enlarge scale", "srewt-card")}
									type="number"
									value={stringToFloat(
										cardEnlargeScale,
										fallbackCardEnalrgeScale,
									)}
									onChange={(value) =>
										setAttributes({
											cardEnlargeScale: `${clamp1Inf(parseFloat(value))}`,
										})
									}
								/>
								<TextControl
									__next40pxDefaultSize
									__nextHasNoMarginBottom
									label={__("Hover enlarge duration", "srewt-card")}
									help={__("Unit in seconds", "sretw-card")}
									type="number"
									value={stringToFloat(
										cardEnlargeDuration,
										fallbackCardEnalrgeDuration,
									)}
									onChange={(value) =>
										setAttributes({
											cardEnlargeDuration: `${clamp0Inf(parseFloat(value))}s`,
										})
									}
								/>
							</>
						)}
					</MenuGroup>
				</PanelBody>

				{/* General title setting */}
				<PanelBody title={__("Title", "sretw-card")} initialOpen={false}>
					<TextControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						label={__("Text", "sretw-card")}
						value={title || ""}
						onChange={(value) => setAttributes({ title: value })}
					/>
					{title && (
						<>
							<FontSizePicker
								__next40pxDefaultSize
								fontSizes={fontSizes}
								value={titleFontSize}
								fallbackFontSize={fallbackFontSize}
								onChange={(newFontSize) => {
									setAttributes({ titleFontSize: newFontSize });
								}}
							/>
							<SelectControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								label={__("Font weight", "sretw-card")}
								value={titleFontWeight || fallbackFontWeight}
								options={fontWeights}
								onChange={(value) => setAttributes({ titleFontWeight: value })}
							/>
							<Flex direction="column">
								<FlexItem>
									<span>{__("Text alignment ")}</span>
								</FlexItem>
								<FlexItem>
									<AlignmentToolbar
										value={titleAlignment || "center"}
										onChange={(value) =>
											setAttributes({ titleAlignment: value })
										}
									/>
								</FlexItem>
							</Flex>
						</>
					)}
				</PanelBody>

				{/* General subtitle setting */}
				<PanelBody title={__("Subtitle", "sretw-card")} initialOpen={false}>
					<TextControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						label={__("Text", "sretw-card")}
						value={subtitle || ""}
						onChange={(value) => setAttributes({ subtitle: value })}
					/>
					{subtitle && (
						<>
							<FontSizePicker
								__next40pxDefaultSize
								fontSizes={fontSizes}
								value={subtitleFontSize}
								fallbackFontSize={fallbackFontSize}
								onChange={(newFontSize) => {
									setAttributes({ subtitleFontSize: newFontSize });
								}}
							/>
							<SelectControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								label={__("Font weight", "sretw-card")}
								value={subtitleFontWeight || fallbackFontWeight}
								options={fontWeights}
								onChange={(value) =>
									setAttributes({ subtitleFontWeight: value })
								}
							/>
							<Flex direction="column">
								<FlexItem>
									<span>{__("Text alignment ")}</span>
								</FlexItem>
								<FlexItem>
									<AlignmentToolbar
										value={subtitleAlignment || "center"}
										onChange={(value) =>
											setAttributes({ subtitleAlignment: value })
										}
									/>
								</FlexItem>
							</Flex>
						</>
					)}
				</PanelBody>
			</InspectorControls>

			{/* Block rendering for admin*/}
			<div {...blockProps}>
				{title && (
					<div
						className="title"
						style={{
							fontSize: titleFontSize,
							fontWeight: titleFontWeight || "normal",
							textAlign: titleAlignment || "center",
						}}
					>
						{title}
					</div>
				)}
				{subtitle && (
					<div
						className="subtitle"
						style={{
							fontSize: subtitleFontSize,
							fontWeight: subtitleFontWeight || "normal",
							textAlign: subtitleAlignment || "center",
						}}
					>
						{subtitle}
					</div>
				)}
				<div className="image-container">
					<InnerBlocks
						{...innerBlockProps}
						template={[["core/image", {}]]}
						templateLock="all"
						defaultBlock={{ name: "core/image", attributes: {} }}
						allowedBlocks={["core/image"]}
					/>
				</div>
			</div>
		</>
	);
}
