import Image from 'next/image';

interface PlayerProps {
  previewImagePath: string;
  videoPath: string;
}

export default function Player({ previewImagePath, videoPath }: PlayerProps) {
  return (
    <div className="preview-image relative h-40">
      <Image
        src={previewImagePath}
        alt="Preview"
        fill
        style={{ objectFit: 'cover' }}
        aria-label="preview"
      />
    </div>
  );
}
