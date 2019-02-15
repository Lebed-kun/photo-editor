import React from 'react';

import FilterContents from '../components/options_contents/FilterContents/FilterContents';
import AdjustContents from '../components/options_contents/AdjustContents/AdjustContents';
import CropContents from '../components/options_contents/CropContents/CropContents';
import ResizeContents from '../components/options_contents/ResizeContents/ResizeContents';
import RotateContents from '../components/options_contents/RotateContents/RotateContents';
import FlipContents from '../components/options_contents/FlipContents/FlipContents';

export const optionsContents = {
  'filter' : <FilterContents />,
  'adjust' : <AdjustContents />,
  'crop' : <CropContents />,
  'resize' : <ResizeContents />,
  'rotate' : <RotateContents />,
  'flip' : <FlipContents />
}
