import * as React from 'react'
import { Idea } from '../../stores/IdeaStore';
import './style.scss'

interface IProps {
  idea: Idea
}

class IdeaResult extends React.Component<IProps> {
  render() {
    const { idea } = this.props

    return (
      <div className='idea'>
        {idea.cleaned}
      </div>
    )
  }
}

export default IdeaResult
