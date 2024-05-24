// @ts-check
/* eslint-env node */

/**
 * An object with Jest options.
 * @type {import('@jest/types').Config.InitialOptions}
 */
const options = {
  preset: 'ts-jest',
  resolver: 'ts-jest-resolver',
  globals: {
    'ts-jest': {},
    '__DEV__': true,
    '__PRIVATE_KEY__':
      '0944f35092d231c25a9a04f3495a976ae2d94eb3d28cc4a027f92ce9603d84b3',
    '__ADDRESS__': '0xf988c3e9c389b96a76f05e99af7152d902af75cd',
  },
  modulePathIgnorePatterns: ['<rootDir>/src/providers'],
};

module.exports = options;
