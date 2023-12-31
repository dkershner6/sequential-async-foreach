import wait from 'await-wait';
import asyncForEach from '.';

describe('asyncForEach', () => {
    test('Should execute wildly different timings in order', async () => {
        const timingArray = [200, 100, 2];
        const resultArray = [];

        await asyncForEach(timingArray, async (timing) => {
            await wait(timing);
            resultArray.push(timing);
        });

        expect(resultArray).toEqual(timingArray);

        const syncResultArray = [];
        timingArray.forEach(async (timing) => {
            await wait(timing);
            syncResultArray.push(timing);
        });

        expect(syncResultArray).not.toEqual(timingArray);
    });
});
