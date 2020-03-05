import { createStore } from 'redux'
import redux from './reducer'

export default createStore(
    redux,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

