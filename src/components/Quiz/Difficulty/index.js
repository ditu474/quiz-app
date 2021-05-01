import PropTypes from 'prop-types';
import styles from './Difficulty.module.scss';

const Difficulty = ({ difficulty }) => {
	return <h5 className={styles[difficulty]}>{difficulty}</h5>;
};

Difficulty.propTypes = {
	difficulty: PropTypes.string.isRequired,
};

export default Difficulty;
