import React from 'react';
import LandingPage from 'components/landing';
import styles from './styles.module.css';

function App() {
	return (
		<div className={styles.main_container}>
			<LandingPage></LandingPage>
		</div>
	);
}

export default App;
