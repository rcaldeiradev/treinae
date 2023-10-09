import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExerciseCard from '../../src/components/ExerciseCard';

describe('<ExerciseCard>', () => {
  const title = 'Defined reps exercise card';
  const series = 3;
  const intervalSeconds = 45;

  describe('default exercise card', () => {
    const reps = {
      min: 8,
    };

    beforeEach(() => {
      render(
        <ExerciseCard
          title={title}
          series={series}
          reps={reps}
          intervalSeconds={intervalSeconds}
        />,
      );
    });

    it('renders the exercise card title', () => {
      const renderedTitle = screen.getByRole('heading');

      expect(renderedTitle).toBeVisible();
      expect(renderedTitle).toHaveTextContent(title);
    });

    it('renders the series number, followed by an "x"', () => {
      const renderedSeries = screen.getByTestId('series');

      expect(renderedSeries).toBeInTheDocument();
      expect(renderedSeries.textContent).toBe(`${series}x`);
    });

    it('renders the reps in a single number', () => {
      const renderedReps = screen.getByTestId('reps');

      expect(renderedReps).toBeInTheDocument();
      expect(renderedReps).toHaveTextContent(reps.min);
    });

    it('renders the interval seconds, followed by an "s"', () => {
      const renderedInterval = screen.getByTestId('interval');

      expect(renderedInterval).toBeInTheDocument();
      expect(renderedInterval).toHaveTextContent(`${intervalSeconds}s`);
    });
  });

  describe('range reps exercise card', () => {
    const reps = {
      min: 14,
      max: 16,
    };

    beforeEach(() => {
      render(
        <ExerciseCard
          title={title}
          series={series}
          reps={reps}
          intervalSeconds={intervalSeconds}
        />,
      );
    });

    it('renders the reps in a range format separated by "/"', () => {
      const renderedReps = screen.getByTestId('reps');

      expect(renderedReps).toBeInTheDocument();
      expect(renderedReps).toHaveTextContent(`${reps.min}/${reps.max}`);
    });
  });
});
