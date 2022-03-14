import React from 'react';
import { render } from '@testing-library/react';
import { BasicNewsShort } from './news-short.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicNewsShort />);
  const rendered = getByText('hello from NewsShort');
  expect(rendered).toBeTruthy();
});

