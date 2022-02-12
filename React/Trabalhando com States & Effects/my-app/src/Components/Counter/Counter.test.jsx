import { Counter } from './Counter';
import { screen, render, fireEvent } from '@testing-library/react';

test('renders the counter and the number increases when pressed', () => {

    render(<Counter />);

    const buttonEl = screen.getByText('Aumentar');
    const counterEl = screen.getByText('10');
    fireEvent.click(buttonEl);
    expect(counterEl.innerHTML).toBe('11');
})