'use client';

import { useState } from 'react';

interface ExerciseCompletionToggleProps {
  defaultStatus?: boolean;
}

export default function ExerciseCompletionToggle({
  defaultStatus = false,
}: ExerciseCompletionToggleProps) {
  const [isComplete, setIsComplete] = useState(defaultStatus);

  const handleChange = () => {
    setIsComplete(!isComplete);
  };

  return (
    <input
      type="checkbox"
      aria-label="toggle completion"
      checked={isComplete}
      onChange={handleChange}
    />
  );
}
