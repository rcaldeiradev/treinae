import ExerciseCard from '@/components/ExerciseCard/ExerciseCard';
import { Exercise } from '@/types';

const exercises: Array<Exercise> = [
  {
    title: 'Agachamento unilateral barra guiada',
    series: 3,
    intervalSeconds: 45,
    videoUrl: '/agachamento.mp4',
    previewImgUrl: '/preview3.jpg',
    minReps: 12,
    maxReps: 15,
  },
  // {
  //   title: 'Cadeira extensora 2 tempos',
  //   series: 3,
  //   intervalSeconds: 45,
  //   video: 'extensora.mp4',
  //   previewImg: 'preview4.jpg',
  //   reps: {
  //     min: 14,
  //     max: 16,
  //   },
  // },
  // {
  //   title: 'Flexão quadril polia',
  //   series: 3,
  //   intervalSeconds: 45,
  //   video: 'flex_quadril_polia.mp4',
  //   previewImg: 'preview2.jpg',
  //   reps: {
  //     min: 14,
  //     max: 16,
  //   },
  // },
  // {
  //   title: 'Rotação externa polia',
  //   series: 3,
  //   intervalSeconds: 45,
  //   video: 'rotacao_externa_polia.mp4',
  //   previewImg: 'preview.jpg',
  //   reps: {
  //     min: 14,
  //     max: 16,
  //   },
  // },
  // {
  //   title: 'Remada inclinada aberta livre pronada',
  //   series: 3,
  //   intervalSeconds: 45,
  //   video: 'remada_inclinada_aberta_livre_pronada.mp4',
  //   previewImg: 'preview2.jpg',
  //   reps: {
  //     min: 14,
  //     max: 16,
  //   },
  // },
  // {
  //   title: 'Cricifixo inverso + elevação halter banco',
  //   series: 3,
  //   intervalSeconds: 45,
  //   video: 'cruc_inverso_elevacao_halter_banco.mp4',
  //   previewImg: 'preview3.jpg',
  //   reps: {
  //     min: 14,
  //     max: 16,
  //   },
  // },
  // {
  //   title: 'Abdominal twist russo no bosu',
  //   series: 3,
  //   intervalSeconds: 45,
  //   video: 'ab_twist_russo_bosu.mp4',
  //   previewImg: 'preview.jpg',
  //   reps: {
  //     min: 20,
  //     max: 30,
  //   },
  // },
  // {
  //   title: 'Perdigueiro',
  //   series: 3,
  //   intervalSeconds: 45,
  //   video: 'perdigueiro.mp4',
  //   previewImg: 'preview2.jpg',
  //   reps: {
  //     min: 20,
  //     max: 30,
  //   },
  // },
  // {
  //   title: 'Ponte lateral',
  //   series: 3,
  //   intervalSeconds: 45,
  //   video: 'ponte_lateral.mp4',
  //   previewImg: 'preview3.jpg',
  //   reps: {
  //     min: 1,
  //   },
  // },
];

export default function Home() {
  return (
    <main>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
        {exercises.map((exercise, key) => (
          <li key={key} className="w-full box-border">
            <ExerciseCard exercise={exercise} />
          </li>
        ))}
      </ul>
    </main>
  );
}
