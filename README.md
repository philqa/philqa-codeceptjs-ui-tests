# Example CodeceptJS, Typescript & Puppeteer Tests

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