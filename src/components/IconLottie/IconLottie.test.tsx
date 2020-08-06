import React from 'react';
import { shallow } from 'enzyme';

import IconLottie from './IconLottie';

describe('IconLottie', () => {
  it('should render layout', () => {
    const lottieOptions = {
      animationData: 'foo',
      loop: false,
    };

    const wrapper = shallow(<IconLottie lottieOptions={lottieOptions} />);

    expect(wrapper).toMatchSnapshot();
  });
});
