import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Info from '../../../src/components/ExerciseCard/Info';

it('renders the series number, followed by an "x"', () => {
  const { getByTestId } = render(
    <Info series={3} intervalSeconds={45} minReps={12} maxReps={15} />,
  );
  const renderedSeries = getByTestId('series');

  expect(renderedSeries).toBeVisible();
  expect(renderedSeries.textContent).toBe(`3x`);
});

it('renders the reps in a single number', () => {
  const { getByTestId } = render(
    <Info series={3} intervalSeconds={45} minReps={12} />,
  );

  const renderedReps = getByTestId('reps');

  expect(renderedReps).toBeInTheDocument();
  expect(renderedReps).toHaveTextContent(12);
});

it('renders the interval seconds, followed by an "s"', () => {
  const { getByTestId } = render(
    <Info series={3} intervalSeconds={60} minReps={12} />,
  );
  const renderedInterval = getByTestId('interval');

  expect(renderedInterval).toBeInTheDocument();
  expect(renderedInterval).toHaveTextContent(`60s`);
});

it('renders the reps in a range format separated by "/"', () => {
  const { getByTestId } = render(
    <Info series={4} intervalSeconds={50} minReps={10} maxReps={12} />,
  );
  const renderedReps = getByTestId('reps');

  expect(renderedReps).toBeInTheDocument();
  expect(renderedReps).toHaveTextContent(`10/12`);
});
