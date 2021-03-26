import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { TestComponentProps } from './TestComponent.types';
import './TestComponent.scss';
import Counter from '../Counter';
import counterReducer from '../Counter/counterSlice';

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
  return (
    <Provider store={store}>
      <Counter />
      <div
        data-testid="test-component"
        className={`test-component test-component-${theme}`}
      >
        <h1 className="heading">I'm the test component</h1>
        <h2>Made with love by Harvey</h2>
      </div>
    </Provider>
  );
};

export default TestComponent;
