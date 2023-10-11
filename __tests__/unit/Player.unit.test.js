import { getByLabelText, getByText, render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Player from '../../src/components/Player';

function setup() {
  const videoTitle = 'extensora';
  const videoFilename = 'extensora.mp4';
  const previewImageFilename = 'preview.jpg';
  const playBtnName = 'play';

  const utils = render(
    <Player
      videoTitle={videoTitle}
      videoPath={`/${videoFilename}`}
      previewImagePath={`/${previewImageFilename}`}
    />,
  );

  return {
    ...utils,
    videoTitle,
    previewImageFilename,
    playBtnName,
  };
}

it('should render the preview image', () => {
  const { getByRole, previewImageFilename } = setup();

  const img = getByRole('img', {
    name: 'preview',
    hidden: true,
  });

  expect(img).toBeVisible();
  expect(img.src).toContain(previewImageFilename);
});

it('should display the "play" button on render', () => {
  const { getByRole, playBtnName } = setup();
  const playBtn = getByRole('button', { name: playBtnName });

  expect(playBtn).toBeVisible();
});

it('should render the video on clicking "play", with autoplay, loop, controls and muted', async () => {
  const { videoTitle, playBtnName, getByRole, getByLabelText } = setup();
  const user = userEvent.setup();
  const playBtn = getByRole('button', { name: playBtnName });

  await user.click(playBtn);
  const video = getByLabelText(videoTitle);

  expect(video).toBeVisible();
  expect(video.autoplay).toBeTruthy();
  expect(video.loop).toBeTruthy();
  expect(video.controls).toBeTruthy();
  expect(video.muted).toBeTruthy();
});

it('should remove the "play" button after clicking it', async () => {
  const { getByRole, playBtnName } = setup();
  const user = userEvent.setup();
  const playBtn = getByRole('button', { name: playBtnName });

  await user.click(playBtn);

  expect(playBtn).not.toBeInTheDocument();
});

it('should remove the preview image after clicking "play"', async () => {
  const { getByRole, playBtnName } = setup();
  const user = userEvent.setup();
  const playBtn = getByRole('button', { name: playBtnName });
  const img = getByRole('img', { name: 'preview', hidden: true });

  await user.click(playBtn);

  expect(img).not.toBeInTheDocument();
});
