import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExerciseCard from '../../../src/components/ExerciseCard/ExerciseCard';

const exercise = {
  title: 'Agachamento unilateral barra guiada',
  series: 3,
  intervalSeconds: 45,
  videoUrl: '/agachamento.mp4',
  previewImgUrl: '/preview.jpg',
  minReps: 12,
  maxReps: 15,
};

it('should render the player component', function () {
  const { getByTestId } = render(<ExerciseCard exercise={exercise} />);
  const info = getByTestId('info');

  expect(info).toBeVisible();
});

it('should render the exercise card title', () => {
  const { title } = exercise;
  const { getByRole } = render(<ExerciseCard exercise={exercise} />);
  const renderedTitle = getByRole('heading');

  expect(renderedTitle).toBeVisible();
  expect(renderedTitle).toHaveTextContent(title);
});

it('should render the exercise card info component', function () {
  const { getByTestId } = render(<ExerciseCard exercise={exercise} />);
  const player = getByTestId('player');

  expect(player).toBeVisible();
});
