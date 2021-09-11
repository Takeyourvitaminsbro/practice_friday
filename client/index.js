import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store, { loadTodos } from './store'
import { connect, Provider } from 'react-redux'

class App extends Component {
    componentDidMount() {
        this.props.load()
    }
    render() {
        return (
            <div>
                <h1>HELLOOOOOOO</h1>
            </div>
        )
    }
}

const mapState = (state) => state;

const mapDispatch = (dispatch) => {
    return {
        load: () => dispatch(loadTodos())
    }
}

const _App = connect(mapState, mapDispatch)(App)

ReactDOM.render(<Provider store={store}> <_App /> </Provider>, document.getElementById('root'))