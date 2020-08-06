import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
const store = mockStore({});

export function testProvider<T>(
  WrapperComponent: React.ComponentType<T>,
  props: T,
) {
  return (
    <Provider store={store}>
      <WrapperComponent {...props} />
    </Provider>
  );
}
