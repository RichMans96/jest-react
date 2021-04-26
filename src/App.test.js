import { fireEvent, render, screen } from '@testing-library/react';
import Main from './Main';

describe('Tests for main component', () => {
  test('it matches the snapshot', () => {
    const tree = render(<Main />);

    expect(tree).toMatchSnapshot();
  });

  test('it displays 0', () => {
    let count;

    render(<Main />);
    count = screen.getByTestId('count-display');

    expect(count.innerHTML).toBe('0');
  });

  test('count displays 1 when increment button is clicked', () => {
    let count;

    render(<Main />);
    count = screen.getByTestId('count-display');
    const increment = screen.getByTestId('increment-button');

    fireEvent.click(increment);

    expect(count.innerHTML).toBe('1');
  });

  test('count displays -1 when decrement button is clicked', () => {
    let count;

    render(<Main />);
    count = screen.getByTestId('count-display');
    const decrement = screen.getByTestId('decrement-button');

    fireEvent.click(decrement);

    expect(count.innerHTML).toBe('-1');
  });
});
