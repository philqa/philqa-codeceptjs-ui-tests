# Example CodeceptJS, Typescript & Puppeteer Tests

Simple example of an automated test suite using CodeceptJS and Puppeteer written in TypeScript.

Supporting article: https://phil.qa/article/codeceptjs

## Setup & Run

```
npm i
npm test
```

## Regenerate Step Definitions

Assuming codeceptjs and ts-node are not available globally:
```
cd e2e
./../node_modules/.bin/codeceptjs def
```

Then be sure to add the following to the top of your specs:
```
/// <reference path='../../steps.d.ts' />
```
