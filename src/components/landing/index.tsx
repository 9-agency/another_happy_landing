import { Spacer, SpaceValue } from 'components/spacer';
import { Font, FontType } from 'fonts';
import React from 'react';
import styles from './styles.module.css';


const onContactClick = () => {
    window.location.href = 'mailto:hello@9.agency';
}

function LandingPage() {
	return (
		<div className={styles.container}>
			<div className={styles.content_container}>
				<Font fontType={FontType.headline1}>9 agency</Font>
				<Font fontType={FontType.headline2}>web development and design</Font>
                <Spacer v={SpaceValue.m}></Spacer>
				<button className={styles.button} onClick={onContactClick}>say hello</button>
			</div>
		</div>
	);
}

export default LandingPage;
