const Queue = require('.')

test('enqueue', () => {
    const q = new Queue()

    expect(q.enqueue('foo')).toBe(void 0)
})

test('dequeue', () => {
    const q = new Queue()

    q.enqueue('foo')
    q.enqueue('bar')
    q.enqueue('baz')

    expect(q.dequeue()).toBe('foo')
    expect(q.dequeue()).toBe('bar')
    expect(q.dequeue()).toBe('baz')
    expect(q.dequeue()).toBe(void 0)
})

test('clear', () => {
    const q = new Queue()

    q.enqueue('foo')

    expect(q.clear()).toBe(void 0)
    expect(q.isEmpty).toBe(true)
    expect(q.size).toBe(0)
})

test('size', () => {
    const q = new Queue()

    q.enqueue('foo')

    expect(q.size).toBe(1)
    q.dequeue()
    expect(q.size).toBe(0)
    q.dequeue()
    expect(q.size).toBe(0)
})

test('isEmpty', () => {
    const q = new Queue()

    expect(q.isEmpty).toBe(true)

    q.enqueue('foo')

    expect(q.isEmpty).toBe(false)
})