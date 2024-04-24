# clrsole

> colorful console.log

[![NPM version](https://img.shields.io/npm/v/clrsole.svg?style=flat)](https://npmjs.org/package/clrsole)
[![NPM Downloads](https://img.shields.io/npm/dm/clrsole.svg?style=flat)](https://npmjs.org/package/clrsole)

## Usage

```javascript
import { getLogger, clrsole } from 'clrsole';

const appLogger = getLogger('app');

// logging like log4j
appLogger.trace('message', 'message2', ...);
appLogger.debug('message', 'message2', ...);
appLogger.info('message', 'message2', ...);
appLogger.warn('message', 'message2', ...);
appLogger.error('message', 'message2', ...);
appLogger.fatal('message', 'message2', ...);

clrsole.green('green message', ...);
clrsole.red('red message', ...);

```