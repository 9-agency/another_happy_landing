import React, { CSSProperties } from 'react';

export enum SpaceValue {
	xxs = '--space-xxs',
	xs = '--space-xs',
	s = '--space-s',
	m = '--space-m',
	l = '--space-l',
	xl = '--space-xl',
	xxl = '--space-xxl',
}

export const Spacer = ({ v, h, children }: { [x: string]: SpaceValue }) => {
	const verticalValue = getComputedStyle(
		document.documentElement
	).getPropertyValue(v);
	const horizontalValue = getComputedStyle(
		document.documentElement
	).getPropertyValue(h);

	const spacerStyle: CSSProperties = {
		overflow: 'hidden',
		paddingRight: horizontalValue,
		paddingTop: verticalValue,
	};

	return <div style={spacerStyle}>{children}</div>;
};
