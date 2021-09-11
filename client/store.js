import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger'
import axios from 'axios'
//action constant
const LOAD = 'LOAD'

//action creator
const _loadTodos = (todos) => {
    return {
        type: LOAD,
        todos
    }
}

//thunk
export const loadTodos = () => {
    return async (dispatch)=> {
        const todos = (await axios.get('/api/todos')).data
        dispatch(_loadTodos(todos))
    }
}

//reducer
const todosReducer = (initialState = [], action) => {
    if(action.type === LOAD) {
        return action.todos
    }
}

const store = createStore(todosReducer, applyMiddleware(thunk, loggingMiddleware))

export default store;