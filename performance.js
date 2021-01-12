const Queue = require('.')

function test(add, remove) {
    const start = process.hrtime.bigint()
    const times = 10e4
    for (let i = 0; i < times; i++) {
        add(i)
    }
    for (let i = 0; i < times; i++) {
        remove()
    }
    const end = process.hrtime.bigint()
    const result = (end - start) / 1000n / 1000n
    console.log(`${result} ms`)
}


function testarray() {
    const queue = []
    console.log(`native-array costs:`)
    test(function(value) {
        queue.push(value)
    }, function () {
        queue.shift()
    })
}


function testqueue() {
    const queue = new Queue()
    console.log(`linked-queue costs:`)
    test(function(value) {
        queue.enqueue(value)
    }, function () {
        queue.dequeue()
    })
}


console.log(
    `
    testing performance between linked-queue and native-array, 
    by execute one hundred thousand enqueue and dequeue operation
    
    ...
    `
)
testarray()
testqueue()