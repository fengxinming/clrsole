import { Level, TLevel } from 'base-log-factory';
export interface Options {
  level?: Level | TLevel;
	depth?: number;
}

export { Level } from 'base-log-factory';

export type Formatter = (...args: any[]) => string;

export interface Clrsole {
	reset: Formatter;
	bold: Formatter;
	dim: Formatter;
	italic: Formatter;
	underline: Formatter;
	inverse: Formatter;
	hidden: Formatter;
	strikethrough: Formatter;
	black: Formatter;
	red: Formatter;
	green: Formatter;
	yellow: Formatter;
	blue: Formatter;
	magenta: Formatter;
	cyan: Formatter;
	white: Formatter;
	gray: Formatter;
	bgBlack: Formatter;
	bgRed: Formatter;
	bgGreen: Formatter;
	bgYellow: Formatter;
	bgBlue: Formatter;
	bgMagenta: Formatter;
	bgCyan: Formatter;
	bgWhite: Formatter;
}
