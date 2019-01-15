import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import HomeScreen from './screens/home'
import IdeaStore from './stores/IdeaStore'
import ContextStore from './stores/ContextStore';

const ideaStore = new IdeaStore()
const contextStore = new ContextStore();

const App = () => (
  <Provider idea={ideaStore} context={contextStore}>
    <HomeScreen />
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
