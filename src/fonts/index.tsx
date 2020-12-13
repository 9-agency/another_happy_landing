import React from 'react';
import styles from './styles.module.css';

export interface FontInterface {
	[x: string]: any;
	fontType: FontType;
}

export const Font = ({
	className,
	fontType,
	children,
	...props
}: FontInterface) => {
	const evaluatedStyle = getFontStyle(fontType);
	return (
		<p className={`${evaluatedStyle} ${className}`} {...props}>
			{children}
		</p>
	);
};

/*
Additional fonts style is defined in the css module.
The new value is added to the enum and getFontStyle method is updated.
*/
export enum FontType {
	headline1 = 'headline1',
	headline2 = 'headline2'
}

const getFontStyle = (identifier: FontType): string => {
	switch (identifier) {
		case FontType.headline1: {
			return styles.headline1;
		}
		case FontType.headline2: {
			return styles.headline2;
		}
	}
};
