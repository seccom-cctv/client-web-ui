import { render, screen } from '@testing-library/react';
import Cameras from './Cameras';

describe('<Cameras />', () => {
    test('it should mount', () => {
        render(<Cameras />);

        const app = screen.getByTestId('cameras');
        expect(app).toBeInTheDocument();
    });
});