import PropTypes from 'prop-types';
import styles from './Appbar.module.scss';

const Appbar = ({ goodAnswers, badAnswers }) => {
	return (
		<header className={styles.header}>
			<div className="container">
				<h1 className={styles.logo}>Quiz App</h1>
				<div className={styles.points}>
					<span className={styles['points--good']} data-testid="goodAnswers">
						{goodAnswers}
					</span>
					<span className={styles['points--bad']} data-testid="badAnswers">
						{badAnswers}
					</span>
				</div>
			</div>
		</header>
	);
};

Appbar.propTypes = {
	goodAnswers: PropTypes.number,
	badAnswers: PropTypes.number,
};

export default Appbar;
