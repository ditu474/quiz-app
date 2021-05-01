import Appbar from 'components/Layout/Appbar';
import Quiz from 'components/Quiz';
import { useEffect, useState } from 'react';
import { getQuices } from 'services/quiz';

function App() {
	const [quices, setQuices] = useState([]);
	const [goodAnswers, setGoodAnswers] = useState(0);
	const [badAnswers, setBadAnswers] = useState(0);
	const [position, setPosition] = useState(0);

	useEffect(() => {
		if (position + 3 > quices.length) {
			getQuices().then((res) => {
				setQuices((prevState) => prevState.concat(res));
			});
		}
	}, [position, quices.length]);

	const answerSelectedHandler = (answer) => {
		if (answer === quices[position]['correct_answer']) {
			setGoodAnswers((prevState) => prevState + 1);
		} else {
			setBadAnswers((prevState) => prevState + 1);
		}
		setPosition((oldPos) => oldPos + 1);
	};

	return (
		<>
			<Appbar goodAnswers={goodAnswers} badAnswers={badAnswers} />
			<main>
				{quices.length && (
					<Quiz
						quiz={quices[position]}
						onSelectAnswer={answerSelectedHandler}
					/>
				)}
			</main>
		</>
	);
}

export default App;
