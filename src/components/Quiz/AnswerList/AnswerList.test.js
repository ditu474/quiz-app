import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import AnswerList from './';

describe('AnswerList Component', () => {
	it('Should render the list of answers', () => {
		const dummyAnswers = ['answer1', 'answer2', 'answer3'];

		render(<AnswerList answers={dummyAnswers} />);

		dummyAnswers.forEach((answer) => {
			expect(screen.getByText(answer)).toBeInTheDocument();
		});
	});

	it('Should call the callback with the selected answer', () => {
		const dummyAnswers = ['answer1'];
		const selectedAnswerHandler = jest.fn();

		render(
			<AnswerList
				answers={dummyAnswers}
				onSelectAnswer={selectedAnswerHandler}
			/>
		);

		UserEvent.click(screen.getByText(dummyAnswers[0]));

		expect(selectedAnswerHandler).toHaveBeenCalledWith(dummyAnswers[0]);
	});
});
