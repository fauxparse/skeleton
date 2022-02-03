import { mountDomRenderer } from 'react-cosmos/dom';
import { decorators, fixtures, rendererConfig } from './cosmos.userdeps.js';
import '@styles/application.scss';

mountDomRenderer({
  rendererConfig: { ...rendererConfig, containerQuerySelector: '#root' },
  decorators,
  fixtures,
});

import.meta['hot']?.accept();
