import { render, screen } from '@testing-library/react';
import Appbar from './';

describe('Appbar Component', () => {
	it('Should display the name of the app', () => {
		render(<Appbar />);
		expect(screen.getByRole('heading')).toHaveTextContent('Quiz App');
	});

	it('Should display the number of bad and good answers', () => {
		const goodAnswers = 10;
		const badAnswers = 5;

		render(<Appbar goodAnswers={goodAnswers} badAnswers={badAnswers} />);

		expect(screen.getByText(goodAnswers)).toBeInTheDocument();
		expect(screen.getByText(badAnswers)).toBeInTheDocument();
	});
});
