import { clrsole, getLogger } from '../dist/index.mjs';

const appLogger = getLogger('app', { level: 'trace' });
appLogger.trace('message', null, undefined, { message: 'message2' }, new Error('error'));
appLogger.debug('message', 'message2');
// eslint-disable-next-line no-undef
appLogger.info(NaN, 0, BigInt('9007199254740991'), Infinity);
appLogger.warn('message', 'message2');
appLogger.error(true, false);
appLogger.fatal('message', Symbol('message2'));

clrsole.red('red message');
