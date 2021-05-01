import Card from 'components/UI/Card';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';
import Difficulty from './Difficulty';
import styles from './Quiz.module.scss';

const Quiz = ({ quiz, onSelectAnswer }) => {
	const answers = quiz['incorrect_answers'].concat(quiz['correct_answer']);

	return (
		<div className={`${styles.quiz} container`}>
			<Card>
				<h2>{quiz.category}</h2>
				<Difficulty difficulty={quiz.difficulty} />
				<p dangerouslySetInnerHTML={{ __html: quiz.question }}></p>
				<AnswerList answers={answers} onSelectAnswer={onSelectAnswer} />
			</Card>
		</div>
	);
};

Quiz.propTypes = {
	quiz: PropTypes.shape({
		incorrect_answers: PropTypes.array,
		correct_answer: PropTypes.string,
		category: PropTypes.string,
		difficulty: PropTypes.string,
		question: PropTypes.string,
	}).isRequired,
	onSelectAnswer: PropTypes.func.isRequired,
};

export default Quiz;
