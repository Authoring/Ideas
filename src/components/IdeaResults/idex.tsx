import * as React from 'react'
import { inject } from 'mobx-react';
import IdeaStore from '../../stores/IdeaStore';
import './style.scss'
import IdeaResult from '../IdeaResult';

interface IProps {
  idea?: IdeaStore
}

@inject('idea')
class IdeaResults extends React.Component<IProps> {
  render() {
    const store = this.props.idea

    return (
      <div className='idea-results'>
        {store.hashtags.map(group => (
          <div className='group' key={group}>
            <h3>{group}</h3>
            <div className='ideas'>
              {store.getIdeasByTag(group).map(x => (
                <IdeaResult idea={x} key={x.id + x.value} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default IdeaResults
