import React from 'react';
import Counter from './index';

export default {
  title: 'Counter',
  argTypes: { onClick: { action: 'clicked' } },
};

export const PrimaryCounter = () => <Counter />;
