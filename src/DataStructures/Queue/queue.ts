export default class Queue<Type> {
  elements: Array<Type>;

  constructor() {
    this.elements = [];
  }

  /**
   * Return the first element of the queue.
   * @returns The first element in the queue.
   */
  front() {
    return this.elements[0];
  }

  /**
   * The push function adds a value to the end of the queue.
   * @param {Type} value - Type
   */
  push(value: Type): void {
    this.elements[this.elements.length] = value;
  }

  /**
   * If the queue is empty, throw an error, otherwise delete the first element in the queue
   */
  pop(): void | never {
    if (this.isEmpty()) {
      throw new Error("The queue is empty there is nothing to pop.");
    }
    delete this.elements[0];
  }

  /**
   * If the length of the elements array is equal to zero, return true, otherwise return false
   * @returns A boolean value.
   */
  isEmpty(): boolean {
    if (this.elements.length === 0) return true;
    return false;
  }
}
