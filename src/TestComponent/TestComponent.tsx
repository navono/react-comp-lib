import React from 'react';
import { Provider } from 'react-redux';
import { TestComponentProps } from './TestComponent.types';
import './TestComponent.scss';
import Counter from '../Counter';
import { store } from '../store';

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
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

export default TestComponent;
