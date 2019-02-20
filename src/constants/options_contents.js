import React from 'react';

import FilterContents from '../components/options_contents/FilterContents/FilterContents';
import AdjustContents from '../components/options_contents/AdjustContents/AdjustContents';
import ColorContents from '../components/options_contents/ColorContents/ColorContents';
import RotateContents from '../components/options_contents/RotateContents/RotateContents';
import FlipContents from '../components/options_contents/FlipContents/FlipContents';

export const optionsContents = {
  'filter' : <FilterContents />,
  'adjust' : <AdjustContents />,
  'color' : <ColorContents />,
  'rotate' : <RotateContents />,
  'flip' : <FlipContents />
}
