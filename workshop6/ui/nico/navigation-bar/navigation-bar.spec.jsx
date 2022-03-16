import React from 'react';
import {render} from '@testing-library/react';
import {BasicNavigationBar} from './navigation-bar.composition';


it('should render with the correct text', () => {
    const {getByText} = render(<BasicNavigationBar/>);
    const rendered = getByText('hello from NavigationBar');
    expect(rendered).toBeTruthy();
});

