# sequential-async-foreach

First and foremost, nearly all credit should go to Sebastian Chopin and [his fine article on this topic](https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404).

I just used this function so frequently, that I needed ready access to it.

## Usage

```typescript
import { asyncForEach } from 'sequential-async-foreach';

await asyncForEach([1, 2, 3], async (number) => {
    await doTheAsyncThings(number);
});
```

Each task (1, 2, and 3) will happen in order, and 2 will not start executing until the conclusion of 1.

## Contributing

All contributions are welcome, please open an issue or pull request.

To use this repository:
1. `npm i -g pnpm` (if don't have pnpm installed)
2. `pnpm i`
3. `npx projen` (this will ensure everything is setup correctly, and you can run this command at any time)
4. Good to make your changes!
5. You can run `npx projen build` at any time to build the project.