import { render, screen } from '@testing-library/react';
import Difficulty from './';

describe('Difficulty Component', () => {
	it('Should display the difficulty', () => {
		const difficulty = 'hard';

		render(<Difficulty difficulty={difficulty} />);

		expect(screen.getByText(difficulty)).toBeInTheDocument();
	});
});
