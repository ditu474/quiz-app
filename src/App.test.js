import { act, render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import * as service from 'services/quiz';
import App from './App';

const dummyQuices = [
	{
		incorrect_answers: ['ans1', 'ans2'],
		correct_answer: 'ans3',
		category: 'Medicine',
		difficulty: 'medium',
		question: 'Test Quiz 1',
	},
	{
		incorrect_answers: ['ans1', 'ans2'],
		correct_answer: 'ans3',
		category: 'Sports',
		difficulty: 'hard',
		question: 'Test Quiz 2',
	},
];

describe('App Component', () => {
	it('Should display 0 as the initial value for goodAnswers', () => {
		render(<App />);

		expect(screen.getByTestId('goodAnswers')).toHaveTextContent('0');
	});

	it('Should display 0 as the initial value for badAnswers', () => {
		render(<App />);

		expect(screen.getByTestId('badAnswers')).toHaveTextContent('0');
	});

	it('Should display the first element', async () => {
		jest.spyOn(service, 'getQuices').mockResolvedValue(dummyQuices);

		await act(async () => {
			render(<App />);
		});

		expect(screen.getByText(dummyQuices[0].question)).toBeInTheDocument();
	});

	it('Should display 1 if the user select the good answer', async () => {
		jest.spyOn(service, 'getQuices').mockResolvedValue(dummyQuices);

		await act(async () => {
			render(<App />);
		});

		expect(screen.getByTestId('goodAnswers')).toHaveTextContent('0');

		await act(async () => {
			UserEvent.click(screen.getByText(dummyQuices[0].correct_answer));
		});

		expect(screen.getByTestId('goodAnswers')).toHaveTextContent('1');
	});

	it('Should display 1 if the user select the bad answer', async () => {
		jest.spyOn(service, 'getQuices').mockResolvedValue(dummyQuices);

		await act(async () => {
			render(<App />);
		});

		expect(screen.getByTestId('badAnswers')).toHaveTextContent('0');

		await act(async () => {
			UserEvent.click(screen.getByText(dummyQuices[0].incorrect_answers[0]));
		});

		expect(screen.getByTestId('badAnswers')).toHaveTextContent('1');
	});

	it('Should display the new question when user select an answer', async () => {
		jest.spyOn(service, 'getQuices').mockResolvedValue(dummyQuices);

		await act(async () => {
			render(<App />);
		});

		await act(async () => {
			UserEvent.click(screen.getByText(dummyQuices[0].correct_answer));
		});

		expect(screen.getByText(dummyQuices[1].question)).toBeInTheDocument();
	});
});
