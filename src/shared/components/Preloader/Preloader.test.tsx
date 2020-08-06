import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Preloader from './Preloader';

const renderer = new ShallowRenderer();

describe('Preloader', () => {
  it('should render layout', () => {
    const wrapper = renderer.render(<Preloader />);

    expect(wrapper).toMatchSnapshot();
  });
});
