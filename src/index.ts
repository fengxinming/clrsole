import { inspect } from 'node:util';

import { basicLogPrefix, ConsoleAppender, ILayout, ILogEvent, Level, LogFactory } from 'base-log-factory';
import pc from 'picocolors';

import { Clrsole, Options } from './typings';

const levels = {
  [Level.FATAL]: 'magenta',
  [Level.ERROR]: 'red',
  [Level.WARN]: 'yellow',
  [Level.INFO]: 'green',
  [Level.DEBUG]: 'cyan',
  [Level.TRACE]: 'blue'
};

function colorText(color: string, root: string, messages: any[], depth: number): string {
  for (let i = 0, len = messages.length, tmp; i < len; i++) {
    tmp = messages[i];
    switch (typeof tmp) {
      case 'object':
        tmp = inspect(tmp, { depth });
        break;
      case 'symbol':
        tmp = tmp.toString();
        break;
    }
    root += ` ${tmp}`;
  }
  return pc[color](root);
}

class ColorLayout implements ILayout {
  depth: number = Infinity;
  format(event: ILogEvent): string {
    return colorText(
      levels[event.level],
      basicLogPrefix(event),
      event.message,
      this.depth
    );
  }
}

export const factory = new LogFactory({
  appenders: [
    new ConsoleAppender(new ColorLayout())
  ]
});

export function getLogger(name: string, opts: Options = {}) {
  const logger = factory.getLogger(name);
  logger.level = opts.level || Level.INFO;
  ((logger.appenders.get('console') as ConsoleAppender).layout as ColorLayout).depth = opts.depth || Infinity;
  return logger;
}

export const clrsole: Clrsole = {} as any;
Object.entries(pc).forEach(([color, fn]) => {
  if (typeof fn === 'function') {
    clrsole[color] = (...messages: any[]) => {
      // eslint-disable-next-line no-console
      console.log(colorText(color, '', messages, Infinity));
    };
  }
});

export { Level };

export * from './typings';
