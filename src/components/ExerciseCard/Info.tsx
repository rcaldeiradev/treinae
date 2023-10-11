import CompletionToggle from '@/components/ExerciseCard/CompletionToggle';

interface ExerciseCardInfoProps {
  series: number;
  intervalSeconds: number;
  minReps: number;
  maxReps?: number;
}

export default function Info({
  series,
  intervalSeconds,
  minReps,
  maxReps,
}: ExerciseCardInfoProps) {
  const buildSeriesValue = () => {
    return `${series}x`;
  };

  const buildRepsValue = () => {
    if (minReps && maxReps) {
      return `${minReps}/${maxReps}`;
    }

    return minReps;
  };

  const buildIntervalSecondsValue = () => {
    return `${intervalSeconds}s`;
  };

  return (
    <div className="info flex justify-between" data-testid={'info'}>
      <div>
        <span data-testid={'series'}>{buildSeriesValue()}</span>
        <div className="text-xs font-semibold text-gray-600">Series</div>
      </div>

      <div>
        <span data-testid={'reps'}>{buildRepsValue()}</span>
        <div className="text-xs font-semibold text-gray-600">Reps</div>
      </div>

      <div>
        <span data-testid={'interval'}>{buildIntervalSecondsValue()}</span>
        <div className="text-xs font-semibold text-gray-600">Intervalo</div>
      </div>

      <CompletionToggle className="" />
    </div>
  );
}
