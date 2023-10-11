import { Exercise } from '@/types';
import Player from '@/components/Player';
import ExerciseCardInfo from '@/components/ExerciseCard/ExerciseCardInfo';
import ExerciseCompletionToggle from '@/components/ExerciseCard/ExerciseCompletionToggle';

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({
  exercise: {
    title,
    videoUrl,
    previewImgUrl,
    series,
    intervalSeconds,
    minReps,
    maxReps,
  },
}: ExerciseCardProps) {
  return (
    <article className="exercise-card bg-white h-full rounded-2xl overflow-hidden">
      <ExerciseCompletionToggle />

      <div className="media-wrapper">
        <Player
          videoTitle={title}
          videoPath={videoUrl}
          previewImagePath={previewImgUrl}
        />
      </div>

      <div className="texts-wrapper p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>

        <ExerciseCardInfo
          series={series}
          intervalSeconds={intervalSeconds}
          minReps={minReps}
          maxReps={maxReps}
        />
      </div>
    </article>
  );
}
