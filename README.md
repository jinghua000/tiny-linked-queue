# tiny-linked-queue

[![npm module](https://badge.fury.io/js/tiny-linked-queue.svg)](https://www.npmjs.com/package/tiny-linked-queue)
[![size](https://badgen.net/bundlephobia/minzip/tiny-linked-queue)](https://bundlephobia.com/result?p=tiny-linked-queue)

## Introduction

A tiny queue(first-in, first-out) implemented by linked-list.

## Movitation

`enqueue` and `dequeue` operation implemented by linked-list has O(1) time-complex, faster than `Array.prototype.shift` which costs O(n).

## Usage

`npm install -D tiny-linked-queue`

```js
const Qeueue = require('tiny-linked-queue')
const q = new Qeueue()

q.enqueue('foo')
q.enqueue('bar')
q.enqueue('baz')

q.dequeue() // => 'foo'
q.dequeue() // => 'bar'
q.dequeue() // => 'baz'
```

## API

```ts
declare class Queue<ValueType> {
    readonly size: number;
    readonly isEmpty: boolean;
    constructor();
    enqueue(value: ValueType): void;
	dequeue(): ValueType | undefined;
	clear(): void;
}

export = Queue;
```

## Performace 

`node performance.js`

sample output:

```
testing performance between linked-queue and native-array, 
by execute one hundred thousand enqueue and dequeue operation
    
...
    
native-array costs:
11388 ms
linked-queue costs:
19 ms
```

## Tests

`yarn test`