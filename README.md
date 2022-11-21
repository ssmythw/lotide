# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @ssmy39/lotide`

**Require it:**

`const _ = require('@ssmy39/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertEqual(...)`: asserts if two variables are equal (not including arrays and objects)
- `eqArrays(...)`: asserts if two arrays are equal to each other
- `head(...)`: returns the head of the array, or the first element
- `tail(...)`: returns the tail of the array, or every element that isn't the first
- `middle(...)`: returns the middle index of an array, even or odd numbered
