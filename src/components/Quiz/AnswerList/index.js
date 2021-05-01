import PropTypes from 'prop-types';
import styles from './AnswerList.module.scss';

const AnswerList = ({ answers, onSelectAnswer }) => {
	const randomAnswers = answers.sort(() => (Math.random() > 0.5 ? 1 : -1));

	const answersList = randomAnswers.map((answer) => (
		<li key={answer} onClick={() => onSelectAnswer(answer)}>
			{answer}
		</li>
	));

	return <ul className={styles.list}>{answersList}</ul>;
};

AnswerList.propTypes = {
	answers: PropTypes.array,
	onSelectAnswer: PropTypes.func,
};

export default AnswerList;
