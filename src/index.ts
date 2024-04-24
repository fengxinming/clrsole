import { inspect } from 'node:util';

import { createFactory, format, LogOptions, TLogLevel } from 'base-log-factory';
import pc from 'picocolors';

import { Clrsole, LoggerOptions } from './typings';

const levels = {
  FATAL: 'magenta',
  ERROR: 'red',
  WARN: 'yellow',
  INFO: 'green',
  DEBUG: 'cyan',
  TRACE: 'blue'
};

function colorText(color: string, root: string, messages: any[]): string {
  for (let i = 0, len = messages.length, tmp; i < len; i++) {
    tmp = messages[i];
    switch (typeof tmp) {
      case 'object':
        tmp = inspect(tmp, { depth: Infinity });
        break;
      case 'symbol':
        tmp = tmp.toString();
        break;
    }
    if (i > 0) {
      root += ' ';
    }
    root += tmp;
  }
  return color ? pc[color](root) : root;
}

const DEFAULT_FORMATTER = 'YYYY-MM-DD HH:mm:ss.SSSZ';
function defaultLayout(messages: any[], logOpts: LogOptions): string {
  return colorText(
    levels[logOpts.level],
    `[${format(logOpts.date, DEFAULT_FORMATTER)}] [${logOpts.level}] [${logOpts.name}] - `,
    messages
  );
}

function createAppender() {
  return {
    log(messages, logOpts) {
      // eslint-disable-next-line no-console
      console.log(defaultLayout(messages, logOpts));
    },
    dispose() {
      return Promise.resolve();
    }
  };
}

const factory = createFactory({ appender: createAppender() });

export function getLogger(name: string, opts: LoggerOptions = {}) {
  const logger = factory.getLogger(name);
  logger.level(opts.level as TLogLevel);
  return logger;
}

export const clrsole: Clrsole = {} as any;
Object.keys(pc).forEach((color) => {
  clrsole[color] = (...messages: any[]) => {
    // eslint-disable-next-line no-console
    console.log(colorText(color, '', messages));
  };
});

export * from './typings';
