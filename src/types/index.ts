export interface Exercise {
  title: string;
  series: number;
  intervalSeconds: number;
  video: string;
  previewImg: string;
  reps: {
    min: number;
    max?: number;
  };
}
