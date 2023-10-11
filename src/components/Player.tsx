'use client';

import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

interface PlayerProps {
  videoTitle: string;
  videoPath: string;
  previewImagePath: string;
}

export default function Player({
  videoTitle,
  videoPath,
  previewImagePath,
}: PlayerProps) {
  const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);

  function playVideo() {
    setIsPlayerLoaded(true);
  }

  return (
    <div className="player relative h-40" data-testid={'player'}>
      {!isPlayerLoaded && (
        <>
          <Image
            src={previewImagePath}
            alt="Preview"
            fill
            style={{ objectFit: 'cover' }}
            aria-label="preview"
            className="z-10"
          />

          <button
            aria-label="play"
            className="absolute z-20 w-full h-full"
            onClick={playVideo}
          >
            <PlayIcon className="text-white w-14 m-auto opacity-90" />
          </button>
        </>
      )}

      {isPlayerLoaded && (
        <video
          controls={true}
          autoPlay={true}
          muted={true}
          loop={true}
          aria-label={videoTitle}
        >
          <source src={videoPath} />
        </video>
      )}
    </div>
  );
}
