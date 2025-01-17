/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {
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
	} = props;
	const blockProps = useBlockProps.save();
	// console.log(props);
	return (
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
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
