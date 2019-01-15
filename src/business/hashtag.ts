export default class HashTags {
  
  raw: string
  
  constructor(raw: string) {
    this.raw = raw
  }

  Parse(): string[] {
    const tags = this.raw.match(/\B(\#[a-zA-Z]+\b)(?!;)/g)
    return tags || []
  }

  Remove(): string {
    return this.raw
      .replace(/\B(\#[a-zA-Z]+\b)(?!;)/g, '')
      .trim()
  }
}