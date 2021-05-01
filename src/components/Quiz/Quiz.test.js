import { render, screen } from '@testing-library/react';
import Quiz from './';

const quiz = {
	incorrect_answers: ['ans1', 'ans2'],
	correct_answer: 'ans3',
	category: 'Medicine',
	difficulty: 'medium',
	question: 'Test Quiz',
};

const selectAnsHdlr = jest.fn();

describe('Quiz Component', () => {
	it('Should display the category of the quiz', () => {
		render(<Quiz quiz={quiz} onSelectAnswer={selectAnsHdlr} />);

		expect(screen.getByText(quiz.category)).toBeInTheDocument();
	});
});
