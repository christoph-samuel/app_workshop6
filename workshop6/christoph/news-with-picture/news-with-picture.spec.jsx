import React from 'react';
import { render } from '@testing-library/react';
import { BasicNewsWithPicture } from './news-with-picture.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicNewsWithPicture />);
  const rendered = getByText('hello from NewsWithPicture');
  expect(rendered).toBeTruthy();
});

