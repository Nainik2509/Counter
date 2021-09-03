import React, { useReducer } from 'react'
import { Button, ButtonGroup, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
    counter1: 0,
    counter2: 10,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter1: state.counter1 + 1 }
        case 'decrement':
            return { ...state, counter1: state.counter1 - 1 }
        case 'reset':
            return initialState
        default:
            return state
    }
}
const Counter = () => {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    Counter1 <Badge color="dark">{count.counter1}</Badge>
                </Button>
                <Button color="primary" outline>
                    Counter2 <Badge color="dark">{count.counter2}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch({ type: 'increment' })}>Increment</Button>
                <Button color="dark" onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button>
                <Button color="danger" onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter
