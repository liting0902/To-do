import React, { useContext, useEffect, useState } from "react";
import FinishedList from "../container/FinishedList";
import TodoList from "../container/TodoList.jsx";
import List from "../components/List.jsx";
import {
	TodoListContext,
	TodoDispatchContext,
} from "../contexts/TodoContext.js";

function ItemList() {
	const todoList = useContext(TodoListContext);
	const todoDispatch = useContext(TodoDispatchContext);
	const [notFinished, setNotFinished] = useState([]);
	const [finished, setFinished] = useState([]);
	const [showTodoList, setshowTodoList] = useState(true);
	useEffect(() => {
		const needTodo = todoList.filter((e) => !e.finished);
		const finishedList = todoList.filter((e) => e.finished);
		setNotFinished(needTodo);
		setFinished(finishedList);
	}, [todoList]);
	const clickHandler = (event, todo) => {
		event.preventDefault();
		const isFinished = confirm(`Have you finished ${todo.content}?`);
		const index = todoList.indexOf(todo);
		todoList[index].finished = true;
		todoList[index].finishedTime = new Date().getTime();

		if (isFinished) {
			todoDispatch({ type: "FINISHED", todoList: todoList });
			setNotFinished(() => todoList.filter((item) => !item.finished));
			setFinished(() => todoList.filter((item) => item.finished));
		}
	};
	return (
		<div
			style={{
				border: "rgb(220,220,220) 1px solid",
				width: "60%",
				height: "70vh",
				margin: "1rem auto",
				padding: "2px",
				boxSizing: "border-box",
			}}>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					width: "100%",
					height: "3rem",
					border: "gray 1px solid",
				}}>
				<div
					style={{
						width: "50%",
						padding: "1rem",
						textAlign: "center",
						transition: "background .6s ease-in",
						background: `${
							showTodoList ? "white" : "rgb(220,220,220)"
						}`,
					}}
					onClick={() => {
						setshowTodoList(true);
					}}>
					<span style={{ verticalAlign: "center" }}>To-do</span>
				</div>
				<div
					style={{
						width: "50%",
						padding: "1rem",
						textAlign: "center",
						transition: "background .6s ease-in",
						background: `${
							!showTodoList ? "white" : "rgb(220,220,220)"
						}`,
					}}
					onClick={() => {
						setshowTodoList(false);
					}}>
					Finished
				</div>
			</div>
			<div
				style={{
					width: "100%",
					height: "80%",
					padding: "1rem",
					overflowY: "scroll",
					boxSizing: "border-box",
				}}>
				{showTodoList ? (
					<TodoList data={notFinished} clickHandler={clickHandler} />
				) : (
					<FinishedList data={finished} />
				)}
			</div>
		</div>
	);
}
export default ItemList;
