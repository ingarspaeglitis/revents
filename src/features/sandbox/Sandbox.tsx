import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from './testReducer';
import { Button } from 'semantic-ui-react';


export default function Sandbox() {

    const dispatch = useDispatch();
    const {data} = useSelector<any, any>((state: any) => {
        return {
            data: state.test.data
        }
    });

    return (
       <>
        <h1>testing 123</h1>
        <h3>The data is: {data} </h3>
        <Button onClick={() => dispatch({ type: incrementCounter}) } content='Increment' color='green'/>
        <Button onClick={() => dispatch({ type: decrementCounter}) } content='Decrement' color='red'/>
       </>
    );
}