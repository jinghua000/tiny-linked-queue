declare class Queue<ValueType> {
    /**
     * size of queue.
     */
    readonly size: number;
    /**
     * check the queue is empty.
     */
    readonly isEmpty: boolean;
    /**
     * return the first element of queue.
     */
    readonly head: ValueType | undefined;
    /**
     * return the last element of queue.
     */
    readonly tail: ValueType | undefined;
    /**
     * constructor.
     */
    constructor();
    /**
     * enqueue.
     */
    enqueue(value: ValueType): void;
    /**
     * dequeue.
     */
    dequeue(): ValueType | undefined;
    /**
     * clear the queue.
     */
    clear(): void;
}

export = Queue;