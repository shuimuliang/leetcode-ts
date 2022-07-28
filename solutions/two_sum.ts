function twoSum(nums: number[], target: number): number[] {
    let sums: number[];
    let map = new Map<number, number[]>();

    nums.forEach(
        (value, index) => {
            let indexArray = map.get(value);
            if (indexArray == undefined) {
                map.set(value,[index]);
            } else {
                indexArray.push(index);
                map.set(value, indexArray);
            }
        }
    );

    for (let i = 0; i < nums.length; ++i) {
        let left = target - nums[i];
        let indexArray = map.get(left);
        if (indexArray != undefined) {
           // find pos not equal to self
            for (let val of indexArray) {
               if (val != i) {
                  return [i, val] ;
               }
            }
        }
    }

    return [];
}

import {assertEquals} from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("url test", () => {
    let nums: number[] = [2, 7, 11, 15];
    let target: number = 9;
    let sums = twoSum(nums, target);

    assertEquals(sums, [0, 1]);
});

Deno.test("url test", () => {
    let nums: number[] = [3, 2, 4];
    let target: number = 6;
    let sums = twoSum(nums, target);

    assertEquals(sums, [1, 2]);
});

Deno.test("url test", () => {
    let nums: number[] = [3, 3];
    let target: number = 6;
    let sums = twoSum(nums, target);

    assertEquals(sums, [0, 1]);
});
