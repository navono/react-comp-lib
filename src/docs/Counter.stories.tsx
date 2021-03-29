import React from 'react';
import { Provider } from 'react-redux';
import Counter from '../Counter';
import { store } from '../store';

export default {
  title: 'Counter',
  argTypes: { onClick: { action: 'clicked' } },
};

export const PrimaryCounter = () => <Provider store={store}><Counter /></Provider>;
