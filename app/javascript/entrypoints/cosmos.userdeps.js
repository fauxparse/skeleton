// This file is automatically generated by Cosmos. Add it to .gitignore and
// only edit if you know what you're doing.

// Keeping global imports here is superior to making them bundle entry points
// because this way they become hot-reloadable.


import fixture0 from './../components/Button/Button.fixture.tsx';
import fixture1 from './../styles/Colors.fixture.tsx';

import decorator0 from './../cosmos.decorator.tsx';

export const rendererConfig = {
  "port": 3001
};

export const fixtures = {
  'components/Button/Button.fixture.tsx': { module: { default: fixture0 } },
  'styles/Colors.fixture.tsx': { module: { default: fixture1 } }
};

export const decorators = {
  'cosmos.decorator.tsx': decorator0
};
