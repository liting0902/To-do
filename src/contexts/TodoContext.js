import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todoReducer.js";

export const TodoListContext = createContext();
export const TodoDispatchContext = createContext();

export function TodoProvider(props) {
	const initialValue = [];
	const [todoList, todoDispatch] = useReducer(todoReducer, initialValue);
	return (
		<TodoListContext.Provider value={todoList}>
			<TodoDispatchContext.Provider value={todoDispatch}>
				{props.children}
			</TodoDispatchContext.Provider>
		</TodoListContext.Provider>
	);
}
