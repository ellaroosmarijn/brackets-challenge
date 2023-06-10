# Brackets Challenge Solution

This repository contains a solution to the brackets challenge, which involves checking whether a given string of brackets is balanced and properly nested.

## Problem Description

The challenge is to implement a function `balancingBrackets` that takes a string as input and checks whether the brackets in the string are balanced and properly nested. The function should return `true` if the brackets are balanced and `false` otherwise.

## Approach and Algorithm

The approach used in this solution is to iterate over each character in the string and maintain a stack of opening brackets encountered. When a closing bracket is encountered, it is checked against the top of the stack to ensure proper nesting and matching. If the brackets are balanced and nested correctly, the stack will be empty at the end.

The algorithm follows these steps:
1. Initialize an empty stack to store opening brackets.
2. Iterate over each character in the string.
3. If the character is an opening bracket, push it onto the stack.
4. If the character is a closing bracket, check if the stack is empty or if the top of the stack does not match the closing bracket. If either condition is true, the brackets are unbalanced, and the function returns `false`.
5. If the character is neither an opening nor a closing bracket, ignore it and continue.
6. After iterating through all characters, check if the stack is empty. If it is not, there are unbalanced opening brackets, and the function returns `false`. Otherwise, the brackets are balanced, and the function returns `true`.

## Implementation Details

The solution is implemented in JavaScript and consists of a single function `balancingBrackets` that takes a string parameter and returns a boolean value.

The function uses an array-based stack to keep track of opening brackets encountered. It iterates over each character in the input string and performs the necessary checks to determine if the brackets are balanced and properly nested.

## Installation

To install the necessary dependencies and run the provided tests, follow these steps:

1. Make sure you have Node.js installed on your machine.
2. Clone this repository to your local machine or download the source code.
3. Open a terminal or command prompt and navigate to the project's root directory.
4. Run the following command to install the dependencies:

```
npm install
```

## Testing

The solution includes a set of test cases to validate the implementation. The test cases cover different scenarios, including balanced brackets, nested brackets, non-bracket characters, overlapping brackets, and single opening/closing brackets. Each test case uses the `tape` testing framework to assert the expected output of the `balancingBrackets` function.

To run the tests, execute the following command:


```
npm test
```