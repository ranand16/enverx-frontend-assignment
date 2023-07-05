import React from 'react';
import { Provider } from 'react-redux';
import App from '../App/App';

interface IProps {
  store: any;
}

const Root = ({ store }: IProps) => (
  <Provider store={store}>
      <App />
  </Provider>
);

export default Root;
