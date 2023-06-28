import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from '../components/Login';
import store from '../redux/store';

describe('LoginForm component', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
