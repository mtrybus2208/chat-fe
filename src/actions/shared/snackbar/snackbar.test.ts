import { SnackbarTypes } from '../../../types/shared/snackbar';
import * as actions from './snackbar';

describe('Snackbar actions', () => {
  it('should create an action to show snackbar', () => {
    const payload = {
      msg: '42',
    };
    const expectedAction = {
      type: SnackbarTypes.SHOW_SNACKBAR,
      payload,
    };

    expect(actions.showSnackbarAction(payload)).toEqual(expectedAction);
  });

  it('should create an action to hide snackbar', () => {
    const expectedAction = {
      type: SnackbarTypes.HIDE_SNACKBAR,
    };

    expect(actions.hideSnackbarAction()).toEqual(expectedAction);
  });
});
