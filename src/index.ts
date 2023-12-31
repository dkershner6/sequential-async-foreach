/**
 * Allows for async functionality within a foreach (unlike standard forEach).
 * Example usage:
 * await asyncForEach([1,2,3], async number => {
 *      await doTheThings(number);
 * });
 *
 * @param {*} array Any Array
 * @param {*} callback The function to perform on each array item.
 */
export const asyncForEach = async <T>(
    array: T[],
    callback: (item: T, index: number, array: T[]) => Promise<unknown>,
): Promise<void> => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};
