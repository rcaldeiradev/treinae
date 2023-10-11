'use client';

import { useState } from 'react';

interface ExerciseCompletionToggleProps {
  defaultStatus?: boolean;
  className?: string;
}

export default function CompletionToggle({
  defaultStatus = false,
  className,
}: ExerciseCompletionToggleProps) {
  const [isComplete, setIsComplete] = useState(defaultStatus);

  const handleChange = () => {
    setIsComplete(!isComplete);
  };

  return (
    <div className={`completion-toggle ${className}`}>
      <input
        type="checkbox"
        aria-label="toggle completion"
        checked={isComplete}
        onChange={handleChange}
        className="w-8 h-8 block mb-2"
      />
    </div>
  );
}
