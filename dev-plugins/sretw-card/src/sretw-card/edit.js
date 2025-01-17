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

import { FontSizePicker, PanelBody, TextControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { Flex } from "@wordpress/components";
import { FlexItem } from "@wordpress/components";
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

const fontSizes = [
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
const fallbackFontSize = 12;

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
		},
		setAttributes,
	} = props;
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps();
	// console.log(props);

	return (
		<>
			<InspectorControls>
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
							<TextControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								label={__("Font weight", "sretw-card")}
								value={titleFontWeight || ""}
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
							<TextControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								label={__("Font weight", "sretw-card")}
								value={subtitleFontWeight || ""}
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
			<div {...blockProps}>
				{title && (
					<div
						className="text-center title"
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
						className="text-center subtitle"
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
