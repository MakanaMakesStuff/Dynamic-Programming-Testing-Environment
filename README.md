# Dynamic Programming Learning & Testing Module

> To run tests run `npm test`

## Adding new functions and tests

1. Inside your `src` folder, add a relevant sub folder(ideally name is pertinent to the function being tested).
2. Create an `index.ts` file in the root of your new folder and ensure to export any function you wish to test.
3. Create an `index.test.ts` file in the root of your new folder(same level as the index.ts file you just created) and implement your jest tests here.

See [src/Fibonacci-Sequence](src/Fibonacci-Sequence) for an example.

## Testing files

> You can run tests on individual files or all files at once

### Single Files

```bash
npm run test
```

> This will open an interactive terminal allowing you to test a specific folder within your src folder. This is why folder structure should be consistent.

### All Files

```bash
npm run test-all
```

> Runs all test simultaneously
