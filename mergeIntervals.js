/**
 * https://leetcode.com/problems/merge-intervals/
 * Given an array of intervals where intervals[i] = [starti, endi], merge all 
 * overlapping intervals, and return 
 * an array of the non-overlapping intervals that cover all the intervals 
 * in the input.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]]
    for (let i = 1; i < sortedIntervals.length; i++) {
        if (res[res.length - 1][1] < sortedIntervals[i][0]) {
            res.push(sortedIntervals[i]);
        }
        else {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], sortedIntervals[i][1])
        }
    }
    return res
};