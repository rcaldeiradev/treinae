import ExerciseCard from '@/components/ExerciseCard/ExerciseCard';
import { Exercise } from '@/types';
import { Metadata } from 'next';
import { exercisesList } from '@/lib/exercises';

export const metadata: Metadata = {
  title: 'Home | Treinaê',
  description: 'Teste',
};

export default function Home() {
  return (
    <main>
      <ul className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 px-4">
        {exercisesList.map((exercise, key) => (
          <li key={key} className="w-full box-border">
            <ExerciseCard exercise={exercise} />
          </li>
        ))}
      </ul>
    </main>
  );
}
