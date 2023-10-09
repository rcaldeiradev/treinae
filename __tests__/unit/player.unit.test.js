import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Player from '../../src/components/Player';

describe('<Player>', () => {
  const filename = 'preview.jpg';
  const previewImagePath = `/${filename}`;
  const videoPath = 'extensora.mp4';

  beforeEach(() => {
    render(
      <Player previewImagePath={previewImagePath} videoPath={videoPath} />,
    );
  });

  it('should render the preview image', () => {
    const img = screen.getByRole('img', {
      name: 'preview',
      hidden: true,
    });

    expect(img).toBeVisible();
    expect(img.src).toContain(filename);
  });

  it('should display the "play" button on render', function () {
    const playBtn = screen.getByRole('button');

    expect(playBtn).toBeVisible();
  });

  it('should play the video on clicking the "play" button', function () {});

  it('should show video controls on clicking the "play" button', function () {});

  it('should hide the "play" button after clicking it', function () {});
});
