import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Home from '../components/Home';
import store from '../redux/store';

describe('Home component', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
