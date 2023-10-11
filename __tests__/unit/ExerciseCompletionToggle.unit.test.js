import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ExerciseCompletionToggle from '../../src/components/ExerciseCard/ExerciseCompletionToggle';

it('should have the status of "checked" on click, if not checked', async () => {
  const { getByLabelText } = render(<ExerciseCompletionToggle />);
  const user = userEvent.setup();
  const checkbox = getByLabelText('toggle completion');

  await user.click(checkbox);

  expect(checkbox).toBeChecked();
});

it('should have the status of "unchecked" on click, if checked', async () => {
  const { getByLabelText } = render(
    <ExerciseCompletionToggle defaultStatus={true} />,
  );
  const user = userEvent.setup();
  const checkbox = getByLabelText('toggle completion');

  await user.click(checkbox);

  expect(checkbox).not.toBeChecked();
});
