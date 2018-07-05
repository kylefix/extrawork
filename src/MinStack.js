const top = arr => arr.slice(-1)[0]
const _head = Symbol('head')
const _tail = Symbol('tail')
const _stack = Symbol('stack')

// realized there was no use to use a linked list
// redid this in MinStack2 below with a second stack
export class MinStack {
  constructor () {
    this[_head] = {} // the min
    this[_tail] = {}
    this[_stack] = []
  }

  _setHead (value) {
    this[_head] = {
      value,
      next: {},
      previous: this[_head]
    }
    this[_head].previous.next = this[_head]
  }

  _setTail (value) {
    this[_tail] = {
      value,
      next: this[_tail],
      previous: {}
    }
    this[_tail].next.previous = this[_tail]
  }

  push (value) {
    !(this[_head].value < value)
      ? this._setHead(value)
      : this._setTail(value)
    this[_stack].push(value)
    return this
  }

  getMin () {
    return this[_head].value
  }

  _popHead () {
    this[_head] = {
      ...this[_head].previous,
      next: {}
    }
  }

  _popTail () {
    this[_tail] = {
      ...this[_tail].next,
      previous: {}
    }
  }

  pop () {
    this[_head].value === this[_stack].pop()
      ? this._popHead()
      : this._popTail()
    return this
  }

  top () {
    return top(this[_stack])
  }
}

const _min = Symbol('min')

export class MinStack2 {
  constructor () {
    this[_min] = [] // the min
    this[_stack] = []
  }

  push (value) {
    !(top(this[_min]) < value) && this[_min].push(value)
    this[_stack].push(value)
    return this
  }

  getMin () {
    return top(this[_min])
  }

  pop () {
    (top(this[_min]) === this[_stack].pop()) && this[_min].pop()
    return this
  }

  top () {
    return top(this[_stack])
  }
}