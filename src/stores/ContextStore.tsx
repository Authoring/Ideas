import { observable, action } from "mobx";

class Context {
  @observable value = ''

  hasContext() {
    return this.value && this.value.length > 0
  }

  constructor(value: string) {
    this.value = value
  }
}

class ContextStore {
  @observable context: Context
  contexts = []

  constructor() {
    this.context = new Context(null)
    this.contexts.push(this.context)
  }

  @action
  change(value: string) {
    this.context = new Context(value)
  }
}

export default ContextStore