import sort from './merge-sort.js';
import { deepStrictEqual } from 'assert';

describe('mergesort', () => {
    it('sorts an array', () => {
        deepStrictEqual(sort([]), []);
        deepStrictEqual(sort([1]), [1]);
        deepStrictEqual(sort([1,2]), [1,2]);
        deepStrictEqual(sort([2,1]), [1,2]);
        deepStrictEqual(sort([1,2,3]), [1,2,3]);
        deepStrictEqual(sort([2,1,3]), [1,2,3]);
        deepStrictEqual(sort([3,1,2]), [1,2,3]);
        deepStrictEqual(sort([1,3,2]), [1,2,3]);
        deepStrictEqual(sort([1,7,3,2]), [1,2,3,7]);

        deepStrictEqual(sort(['d','a','c','b']), ['a','b','c','d']);
    });
});