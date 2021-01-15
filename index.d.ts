declare class Queue<ValueType> {
    readonly size: number;
    readonly isEmpty: boolean;
    constructor();
    enqueue(value: ValueType): void;
    dequeue(): ValueType | undefined;
    clear(): void;
}

export = Queue;