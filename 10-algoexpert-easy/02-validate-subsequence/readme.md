# Challenge: Validate Subsequence

Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers `[1, 3, 4]` form a subsequence of the array `[1, 2, 3, 4]`, and so do the numbers `[2, 4]`. Note that a single number in an array and the array itself are both valid subsequences of the array.

Cho hai mảng số nguyên không rỗng, viết một hàm để xác định xem mảng thứ hai có phải là một dãy con của mảng thứ nhất hay không.

Một dãy con của một mảng là một tập hợp các số không nhất thiết phải liền kề trong mảng nhưng có cùng thứ tự xuất hiện trong mảng. Ví dụ, các số `[1, 3, 4]` tạo thành một dãy con của mảng `[1, 2, 3, 4]`, và các số `[2, 4]` cũng là một dãy con. Lưu ý rằng một số đơn trong một mảng và chính mảng đó cũng là các dãy con hợp lệ của mảng.

## Sample Input

```js
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
```

## Sample Output

```js
true
```

## Optimal Space & Time Complexity

O(n) time | O(1) space - where n is the length of the array

## Hints

<details>
  <summary>Hints 1</summary>
  You can solve this question by iterating through the main input array once.
</details>

<details>
  <summary>Hints 2</summary>
  Iterate through the main array, and look for the first integer in the potential subsequence. If you find that integer, keep on iterating through the main array, but now look for the second integer in the potential subsequence. Continue this process until you either find every integer in the potential subsequence or you reach the end of the main array.
</details>

<details>
  <summary>Hints 3</summary>
  To actually implement what Hint #2 describes, you'll have to declare a variable holding your position in the potential subsequence. At first, this position will be the 0th index in the sequence; as you find the sequence's integers in the main array, you'll increment the position variable until you reach the end of the sequence.
</details>
