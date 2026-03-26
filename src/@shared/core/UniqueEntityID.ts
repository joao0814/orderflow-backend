import { randomUUID } from 'node:crypto';

export class UniqueEntityID {
  private value: string;

  constructor(id?: string) {
    this.value = id ?? randomUUID();
  }

  toString() {
    return this.value;
  }
  toValue() {
    return this.value;
  }
}
