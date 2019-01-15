import * as React from 'react'
import { inject, observer } from 'mobx-react';
import IdeaStore, { Idea } from '../../stores/IdeaStore';
import './style.scss'
import ContextStore from '../../stores/ContextStore';
import IdeaResults from '../../components/IdeaResults/idex';

interface IProps {
  idea?: IdeaStore
  context?: ContextStore
}

@inject('context', 'idea')
@observer
class HomeScreen extends React.Component<IProps> {

  state = {
    value: '@'
  }

  onChange(e) {
    this.setState({value: e.target.value})
  }

  resetValue() {
    this.setState({ value: '' })
  }

  keyPress(e) {
    if (e.keyCode !== 13) {
      return
    }

    const { context, idea } = this.props
    const { value } = this.state
    if (!context.context.hasContext()) {
      context.change(value)
    } else {
      idea.add(new Idea(value))
    }
    this.resetValue();
  }

  render() {
    const store = this.props.context
    const { value } = this.state

    return (
      <div className='home-container'>
        {store.context.hasContext() ? (
          <div>
            <h1>{store.context.value}</h1>
            <h3>What idea do you want to record?</h3>
          </div>
        ) : (
          <div>
            <h1>Set your context</h1>
            <h3>(e.g. Work Meeting, Notes for a book, etc.)</h3>
          </div>
        )}
        <div className='home-input'>
          <input 
            autoFocus 
            type="text"
            value={value}
            onChange={this.onChange.bind(this)}
            onKeyDown={this.keyPress.bind(this)}
          />
        </div>
        <IdeaResults />
      </div>
    )
  }
}

export default HomeScreen
