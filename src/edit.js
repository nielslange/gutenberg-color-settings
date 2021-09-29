/**
 * External dependencies
 */
import {
	useBlockProps,
	InspectorControls,
	withColors,
	PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import "./editor.scss";
import Block from "./block";

function ColorEdit({
	attributes,
	setAttributes,
	textColor,
	setTextColor,
	backgroundColor,
	setBackgroundColor,
}) {
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={true}>
					<PanelColorSettings
						title={__("Color Settings", "free-shipping-progress-bar")}
						colorSettings={[
							{
								label: __("Message Color", "free-shipping-progress-bar"),
								value: textColor.color,
								onChange: setTextColor,
							},
							{
								label: __("Progress Bar Color", "free-shipping-progress-bar"),
								value: backgroundColor.color,
								onChange: setBackgroundColor,
							},
						]}
					></PanelColorSettings>
				</PanelBody>
			</InspectorControls>
			<Block {...attributes} />
		</div>
	);
}

const Edit = withColors("color", {
	textColor: "color",
	backgroundColor: "color",
})(ColorEdit);

export default Edit;
