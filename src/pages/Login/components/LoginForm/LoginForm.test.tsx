import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import LoginForm from './LoginForm';

const renderer = new ShallowRenderer();

describe('LoginForm', () => {
  it('should render layout', () => {
    const props = {
      onSubmit: jest.fn(),
      isPending: false,
    };

    const wrapper = renderer.render(<LoginForm {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
