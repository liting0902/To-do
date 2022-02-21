import React, { useRef, useCallback, useContext, useState } from "react";
import {
	TodoListContext,
	TodoDispatchContext,
} from "../contexts/TodoContext.js";
function InputTodo() {
	const iptRef = useRef();
	const [isSaving, setSaving] = useState(false);
	const todoList = useContext(TodoListContext);
	const todoDispatch = useContext(TodoDispatchContext);
	const submitHandler = useCallback(
		(event) => {
			event.preventDefault();
			setSaving(true);
			const action = {
				type: "ADDNEW",
				todoList: [
					{
						id: new Date().getTime(),
						content: iptRef.current.value,
						finished: false,
						finishedTime: null,
					},
				],
			};

			new Promise((resolve, reject) => {
				setTimeout(() => {
					todoDispatch(action);
					resolve({ isSucced: true });
					reject({ isSucced: false });
				}, 1300);
			}).then((res) => {
				iptRef.current.value = "";
				if (res) {
					setSaving(false);
				} else {
					console.log("Some error happened!");
				}
			});
		},
		[todoList]
	);

	return (
		<React.Fragment>
			<h1>Add to-do</h1>
			<form onSubmit={submitHandler}>
				<input
					ref={iptRef}
					type="text"
					placeholder="Please add new to-do item"
				/>
				<button disabled={isSaving}>
					{isSaving ? "Saving" : "Save"}
				</button>
			</form>
		</React.Fragment>
	);
}
export default InputTodo;
