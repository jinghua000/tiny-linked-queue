class Node {

    constructor(value) {
        this.value = value
        this.next = undefined
    }

}

class Queue {

    constructor() {
        this.clear()
    }

    enqueue(value) {
        if (this.isEmpty) {
            this.head = new Node(value)
            this.tail = this.head
        } else {
            this.tail.next = new Node(value)
            this.tail = this.tail.next
        }

        this._size++
    }

    dequeue() {
        if (this.isEmpty) {
            return 
        }

        const result = this.head.value

        this.head = this.head.next
        this._size--

        return result
    }

    clear() {
        this._size = 0
        this.head = undefined
        this.tail = undefined
    }

    get isEmpty() {
        return this._size === 0
    }

    get size() {
        return this._size
    }
}

module.exports = Queue