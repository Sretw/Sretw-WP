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
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
	useBlockProps,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import "./editor.scss";

import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import { useEffect } from "react";

export default function Edit({ attributes, setAttributes }) {
	const { fallbackCurrentYear, showStartingYear, startingYear } = attributes;
	// const [blocks, updateBlocks] = React.useState([]);
	const currentYear = new Date().getFullYear().toString();

	console.log(useBlockProps());

	useEffect(() => {
		if (currentYear !== fallbackCurrentYear) {
			setAttributes({ fallbackCurrentYear: currentYear });
		}
	}, [fallbackCurrentYear, showStartingYear, startingYear]);

	let displayDate;
	if (showStartingYear && startingYear) {
		displayDate = startingYear + "-" + currentYear;
	} else {
		displayDate = currentYear;
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Setting", "copyright-date-block")}>
					<ToggleControl
						label={__("Show starting year", "copyright-date-block")}
						checked={showStartingYear}
						value={showStartingYear}
						onChange={() => {
							setAttributes({ showStartingYear: !showStartingYear });
						}}
					/>
					{showStartingYear && (
						<TextControl
							label={__("Starting year", "copyright-date-block")}
							value={startingYear || ""}
							onChange={(value) => {
								setAttributes({ startingYear: value });
							}}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<p {...useBlockProps()}>© {displayDate}</p>
		</>
	);
}
