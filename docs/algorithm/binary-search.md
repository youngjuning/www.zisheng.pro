---
order: 0
description: '二分搜索（Binary Search）是一种针对有序数组的高效查找算法。'
keywords: [全栈, 紫升, 二分搜索算法, javascript]
---

# 二分搜索算法

## 什么是二分搜索

二分搜索（Binary Search）是一种针对**有序数组**的高效查找算法。其核心思想是：

- 每次将数组分为两半，通过比较中间元素与目标值，逐步缩小搜索范围。
- 若中间元素等于目标值，直接返回索引；若不等，则根据比较结果选择左半区或右半区继续搜索，直到找到目标或确定不存在。

## 前提条件

- **数组必须有序**：升序或降序排列（默认为升序）。
- **时间复杂度**：O(log n)，每次排除一半元素，效率远超线性排序（O(n)）。

## 算法思路

1. 初始化左右指针 `left=0` 和 `right=arr.length-1`。
2. 循环计算中间索引值 `mid=left+Math.floor(right - left)/2`

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2); // 避免整数溢出
    if (arr[mid] === target) {
      return mid; // 找到目标
    } else if (arr[mid] < target) {
      left = mid + 1; // 搜索右半区
    } else {
      right = mid - 1; // 搜索左半区
    }
  }
  return -1; // 未找到
}

const a = [1, 2, 3, 4, 6, 7]
binarySearch(a, 1)
```
