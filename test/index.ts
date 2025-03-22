import { clrsole, getLogger } from '../src';

const appLogger = getLogger('app', {
  level: 'TRACE',
  depth: 2
});

appLogger.trace('message', null, undefined, { message: 'message2' }, new Error('error'));
appLogger.debug('message', 'message2', {
  a: 1,
  b:
   {
     c: 1,
     d: {
       e: 1,
       f: {
         g: 1
       }
     }
   }
});
// eslint-disable-next-line no-undef
appLogger.info(NaN, 0, BigInt('9007199254740991'), Infinity);
appLogger.warn('message', 'message2');
appLogger.error(true, false);
appLogger.fatal('message', Symbol('message2'));

clrsole.red('red message');
clrsole.green('green message');

process.exit(0);
