import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CompletionToggle from '../../../src/components/ExerciseCard/CompletionToggle';

it('should have the status of "checked" on click, if not checked', async () => {
  const { getByLabelText } = render(<CompletionToggle />);
  const user = userEvent.setup();
  const checkbox = getByLabelText('toggle completion');

  await user.click(checkbox);

  expect(checkbox).toBeChecked();
});

it('should have the status of "unchecked" on click, if checked', async () => {
  const { getByLabelText } = render(<CompletionToggle defaultStatus={true} />);
  const user = userEvent.setup();
  const checkbox = getByLabelText('toggle completion');

  await user.click(checkbox);

  expect(checkbox).not.toBeChecked();
});
