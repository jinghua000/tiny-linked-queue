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
            this._head = new Node(value)
            this._tail = this._head
        } else {
            this._tail.next = new Node(value)
            this._tail = this._tail.next
        }

        this._size++
    }

    dequeue() {
        if (this.isEmpty) {
            return 
        }

        const result = this._head.value

        this._head = this._head.next
        this._size--

        return result
    }

    clear() {
        this._size = 0
        this._head = undefined
        this._tail = undefined
    }

    get head() {
        return this._head && this._head.value
    }

    get tail() {
        return this._tail && this._tail.value
    }

    get isEmpty() {
        return this._size === 0
    }

    get size() {
        return this._size
    }
}

module.exports = Queue