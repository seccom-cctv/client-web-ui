import { render, screen } from '@testing-library/react';
import Sensors from './Sensors';

describe('<Sensors />', () => {
    test('it should mount', () => {
        render(<Sensors />);

        const app = screen.getByTestId('sensors');
        expect(app).toBeInTheDocument();
    });
});