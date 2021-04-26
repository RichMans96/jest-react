import { fireEvent, render, screen } from '@testing-library/react';
import Main from './Main';

describe('Tests for main component', () => {
  let getByTestId;

  beforeEach(() => {
    const component = render(<Main />);
    getByTestId = component.getByTestId;
  });

  test('it matches the snapshot', () => {
    const tree = render(<Main />);

    expect(tree).toMatchSnapshot();
  });

  test('it displays the intial state of 0', () => {
    const count = getByTestId('count-display');

    expect(count.innerHTML).toBe('0');
  });

  test('count displays 1 when increment button is clicked', () => {
    const count = getByTestId('count-display');
    const increment = getByTestId('increment-button');

    fireEvent.click(increment);

    expect(count.innerHTML).toBe('1');
  });

  test('count displays -1 when decrement button is clicked', () => {
    const count = getByTestId('count-display');
    const decrement = getByTestId('decrement-button');

    fireEvent.click(decrement);

    expect(count.innerHTML).toBe('-1');
  });
});
