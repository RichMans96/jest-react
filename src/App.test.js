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
});
