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
3. 比较中间元素与目标值：
  - 相等 → 返回 `mid`。
  - 中间值较小 → 目标在右半区，更新 `left = mid + 1`。
  - 中间值较大 → 目标在左半区，更新 `right = mid - 1`。
4. 若循环结束未找到，返回 `-1`。

## JavaScript 实现

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

关键点：

- `mid` 计算：使用 `(right - left)/2` 而非 `(left + right)/2`，避免大数相加溢出。
- 终止条件：`left <= right` 确保所有元素都被检查。

## 单元测试

```ts
describe('二分搜索算法测试', () => {
  const sortedArr = [2, 5, 8, 12, 16, 23, 38, 56];

  it('目标存在时返回正确索引', () => {
    expect(binarySearch(sortedArr, 23)).toBe(5); // 中间位置
  });

  it('目标不存在时返回-1', () => {
    expect(binarySearch(sortedArr, 10)).toBe(-1); // 不存在元素
  });

  it('目标在数组开头', () => {
    expect(binarySearch(sortedArr, 2)).toBe(0); // 边界测试
  });

  it('目标在数组末尾', () => {
    expect(binarySearch(sortedArr, 56)).toBe(7); // 边界测试
  });

  it('空数组返回-1', () => {
    expect(binarySearch([], 5)).toBe(-1); // 异常输入测试
  });
});
```

测试原则：

- 覆盖所有分支：存在、不存在、边界、异常输入。
- 使用有序数组：确保输入的数组已排序。

## 变体：查找左右边界

### 左边界​（第一个匹配元素）

```js
function lowerBound(arr, target) {
  let left = 0, right = arr.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    arr[mid] < target ? (left = mid + 1) : (right = mid);
  }
  return arr[left] === target ? left : -1;
}
```

### ​右边界​（最后一个匹配元素）

```js
function upperBound(arr, target) {
  let left = 0, right = arr.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    arr[mid] <= target ? (left = mid + 1) : (right = mid);
  }
  return arr[left - 1] === target ? left - 1 : -1;
}
```

## 力扣真题

- [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/)
- [704. 二分查找](https://leetcode.cn/problems/binary-search/)

通过以上实现与测试，你可以掌握二分搜索的核心逻辑，并应对不同场景的需求。建议结合 LeetCode 题目（如 #34 查找边界 和 #704 标准二分）进一步练习。
