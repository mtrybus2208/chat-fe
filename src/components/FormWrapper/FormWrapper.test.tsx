import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import FormWrapper from './FormWrapper';

const renderer = new ShallowRenderer();

describe('ResetPassword', () => {
  it('should render layout', () => {
    const wrapper = renderer.render(
      <FormWrapper name="foo">
        <span>bar</span>
      </FormWrapper>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
