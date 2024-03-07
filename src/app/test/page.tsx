"use client";
import { log } from "console";
import React, { FC, useReducer } from "react";

interface StateType {
	count: number;
}
const initialState: StateType = {
	count: 0,
};

enum Action {
	SETCOUNT = "setCount",
}

const reducer = (state: StateType, action: { type: Action; payload: any }) => {

    switch (action.type) {
        case Action.SETCOUNT:
            return {...state,count:state.count+1}    
        default:
            break;
    }
	return state;
};

const TestPage: FC = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
    const increment=()=>{
        dispatch({type:Action.SETCOUNT,payload:undefined})
    }
	console.log(state.count);

	return(
        <div>
            <button onClick={increment}>count</button><br />
            {state.count}
        </div>
    )
     
};

export default TestPage;
