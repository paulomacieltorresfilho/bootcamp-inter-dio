import { IfoodCounter } from './IfoodCounter';
import { screen, render, fireEvent } from '@testing-library/react';
    
test('the counter increases when + is pressed', () => {
    render(<IfoodCounter />);
    const counterEl = screen.getByText('1');
    const increaseBt = screen.getByText('+');


    fireEvent.click(increaseBt);
    expect(counterEl.innerHTML).toBe('1');
})

test('the counter doesn\'t goes to negative when - is pressed and the value is 0', () => {
    render(<IfoodCounter />);
    const counterEl = screen.getByText('1');
    const decreaseBt = screen.getByText('-');

    fireEvent.click(decreaseBt);
    expect(counterEl.innerHTML).toBe('0');
})

test('the counter decreases when - is pressed', () => {
    render(<IfoodCounter />);
    const counterEl = screen.getByText('1');
    const increaseBt = screen.getByText('+');
    const decreaseBt = screen.getByText('-');

    fireEvent.click(increaseBt);
    fireEvent.click(increaseBt);
    fireEvent.click(decreaseBt);

    expect(counterEl.innerHTML).toBe('1');
})
