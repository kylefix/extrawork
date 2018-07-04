const top = arr => arr.slice(-1)[0]
const _min = Symbol('min')
const _stack = Symbol('stack')

export class MinStack {
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
