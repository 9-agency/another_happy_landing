import { Label } from "components/Label";
import { shuffleArray } from "helpers";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";

const animationDuration = 300;
const headlineDisplayDuration = 4000;

const headlines = [
	// "web development done right",
	"building scalable solutions",
	"providing great user experience",
	"ensuring product quality",

	// "high-quality software",

	// "excellent piece of maintainable software",
	// "delivering products that scale",
	// "making great apps with you",
	// "stable growth with user experience in mind",
];

export const Headline = () => {
	const [activeHeadline, setActiveHeadline] = useState(headlines[0]);

	const [headlineClassName, setHeadlineClassName] = useState(
		`${styles.headline} zeroOpacity`
	);

	const fadeHeadlineIn = useCallback(() => {
		setHeadlineClassName(`${styles.headline} fadeIn`);
	}, []);

	const fadeHeadlineOut = useCallback(() => {
		setHeadlineClassName(`${styles.headline} fadeOut`);
	}, []);

	const changeHeadline = useCallback(() => {
		fadeHeadlineOut();
		setTimeout(() => {
			setActiveHeadline((activeHeadline) => {
				const activeHeadlineIndex = headlines.indexOf(activeHeadline);
				return headlines[(activeHeadlineIndex + 1) % headlines.length];
			});
			fadeHeadlineIn();
		}, animationDuration);
	}, [fadeHeadlineIn, fadeHeadlineOut]);

	useEffect(() => {
		(document as any).fonts.ready.then(() => {
			let changeHeadlineInterval: NodeJS.Timeout;

			fadeHeadlineIn();
			setTimeout(() => {
				changeHeadlineInterval = setInterval(
					changeHeadline,
					headlineDisplayDuration + 2 * animationDuration
				);
			}, animationDuration);

			return () => {
				clearInterval(changeHeadlineInterval);
			};
		});
	}, [fadeHeadlineIn, changeHeadline]);

	return (
		<div className={styles.container}>
			<Label className={headlineClassName} font="headline1">
				{activeHeadline}
			</Label>
		</div>
	);
};
