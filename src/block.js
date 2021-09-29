/**
 * External dependencies
 */
import { getColorClassName } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function Edit({ color, textColor, backgroundColor }) {
	const textColorClass = getColorClassName('color', textColor);
	const backgroundColorClass = getColorClassName(
		'background-color',
		backgroundColor
	);
	const divClasses = classnames({
		'has-text-color': color || textColor,
		'has-background': color || backgroundColor,
		[textColorClass]: textColorClass,
		[backgroundColorClass]: backgroundColorClass,
	});

	return <div className={divClasses}>Hello World!</div>;
}
