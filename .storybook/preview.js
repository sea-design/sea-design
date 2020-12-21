import React from 'react';
import {GlobalStyles} from 'twin.macro';

export const decorators = [
  (Story) => (
    <div>
      {/* */}
      <GlobalStyles />
      <Story />
    </div>
  ),
];
