import React from 'react';
import { shallow } from 'enzyme';

import FieldWrapper from './FieldWrapper';

describe('FieldWrapper', () => {
  it('should render layout', () => {
    const props = {
      label: 'foo',
      name: 'bar',
    };
    const wrapper = shallow(
      <FieldWrapper {...props}>
        <span>42</span>
      </FieldWrapper>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
