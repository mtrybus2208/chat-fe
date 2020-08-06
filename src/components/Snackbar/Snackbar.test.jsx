import ShallowRenderer from 'react-test-renderer/shallow';

import { testProvider } from '../../shared/hoc/testProvider';
import Snackbar from './Snackbar';

const renderer = new ShallowRenderer();

describe('Snackbar', () => {
  it('should render layout', () => {
    const wrapper = renderer.render(testProvider(Snackbar, {}));

    expect(wrapper).toMatchSnapshot();
  });
});
