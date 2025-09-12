import React, { lazy, Suspense } from 'react';

const Waves = lazy(() => import('./Waves'));
const Beams = lazy(() => import('./Beams'));
const LetterGlitch = lazy(() => import('./LetterGlitch'));
const Lightning = lazy(() => import('./Lightning'));
const BallPit = lazy(() => import('./BallPit'));
const Squares = lazy(() => import('./Squares'));
const DotGrid = lazy(() => import('./DotGrid'));

const backgroundComponents = {
  cad: DotGrid,
  programming: LetterGlitch,
  electrical: Lightning,
  outreach: BallPit,
  fab: Squares,
  default: Waves,
};

const backgroundProps = {
  cad: {
    dotSize: 5,
    gap: 15,
    baseColor: '#000000',
    activeColor: '#5227FF',
    proximity: 130,
    shockRadius: 250,
    shockStrength: 5,
    resistance: 750,
    returnDuration: 1.5,
  },
  programming: {
    glitchSpeed: 50,
    centerVignette: true,
    outerVignette: false,
    smooth: true,
  },
  electrical: {
    hue: 220,
    xOffset: 0,
    speed: 1,
    intensity: 1,
    size: 1,
  },
  outreach: {
    count: 50,
    gravity: 0.01,
    friction: 0.9975,
    wallBounce: 0.9975,
    followCursor: true,
    colors: ['#e23942', '#3f71cf', '#0d4b7b'],
  },
  fab: {
    speed: 0.5,
    squareSize: 40,
    direction: 'diagonal',
    borderColor: '#fff',
    hoverFillColor: '#222',
  },
  default: {
    lineColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    waveSpeedX: 0.02,
    waveSpeedY: 0.01,
    waveAmpX: 40,
    waveAmpY: 20,
    friction: 0.9,
    tension: 0.01,
    maxCursorMove: 120,
    xGap: 12,
    yGap: 36,
  },
};

const DynamicBackground = ({ activeTeam }) => {
  const BackgroundComponent = backgroundComponents[activeTeam] || backgroundComponents.default;
  const props = backgroundProps[activeTeam] || backgroundProps.default;

  return (
    <Suspense fallback={null}>
      <BackgroundComponent {...props} />
    </Suspense>
  );
};

export default DynamicBackground;
