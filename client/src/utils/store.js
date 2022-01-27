// Create redux store and import reducers from reducers.js

import { createStore } from 'redux'

import { reducer } from './reducers'

const store = createStore(reducer)
export default store
