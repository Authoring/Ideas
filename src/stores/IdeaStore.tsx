import { observable, action, computed } from 'mobx'
import HashTags from '../business/hashtag';

export class Idea {
  id: number
  @observable value = ''

  @computed get hashtags() {
    const tags = new HashTags(this.value)
    return tags.Parse()
  }

  @computed get cleaned() {
    const tags = new HashTags(this.value)
    return tags.Remove()
  }

  constructor(value: string) {
    this.value = value;
    this.id = Math.random()
  }
}

class IdeaStore {
  @observable ideas: Idea[] = [];
  @observable context = null

  @computed get hashtags(): string[] {
    let tags = {}
    for (const idea of this.ideas) {
      idea.hashtags.map(x => tags[x] = true)
    }

    return Object.keys(tags)
  }

  /**
   * Get ideas by tag
   * @param tag 
   */
  getIdeasByTag(tag: string): Idea[] {
    return this.ideas
      .filter(x => x.hashtags.indexOf(tag) > -1)
  }

  @action
  add(idea: Idea) {
    this.ideas.push(idea)
  }
}

export default IdeaStore
