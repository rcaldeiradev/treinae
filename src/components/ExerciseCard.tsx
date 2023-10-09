import Image from 'next/image';
import { Exercise } from '@/types';
import Player from '@/components/Player';

interface ExerciseCardProps extends Exercise {}

export default function ExerciseCard({
  title,
  series,
  reps,
  video,
  previewImg,
  intervalSeconds,
}: ExerciseCardProps) {
  const buildRepsText = () => {
    if (reps.min && reps.max) {
      return `${reps.min}/${reps.max}`;
    }

    return reps.min;
  };

  return (
    <article className="exercise-card bg-white h-full rounded-2xl overflow-hidden">
      <div className="media-wrapper">
        <Player previewImagePath={`/${previewImg}`} videoPath={video} />
      </div>

      <div className="texts-wrapper p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>

        <div className="info flex justify-between">
          <div>
            <span data-testid={'series'}>{`${series}x`}</span>
            <div className="text-xs font-semibold text-gray-600">Series</div>
          </div>

          <div>
            <span data-testid={'reps'}>{buildRepsText()}</span>
            <div className="text-xs font-semibold text-gray-600">Reps</div>
          </div>

          <div>
            <span data-testid={'interval'}>{`${intervalSeconds}s`}</span>
            <div className="text-xs font-semibold text-gray-600">Intervalo</div>
          </div>
        </div>
      </div>
    </article>
  );
}
