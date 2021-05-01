import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({ children }) => {
	return <div className={styles.card}>{children}</div>;
};

Card.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Card;
