import React from "react";
import InputTodo from "./page/InputTodo.jsx";
import { TodoProvider } from "./contexts/TodoContext.js";
import ItemList from "./page/ItemList.jsx";
export default function () {
	return (
		<React.Fragment>
			<TodoProvider>
				<InputTodo />
				<ItemList />
			</TodoProvider>
		</React.Fragment>
	);
}
