import React from "react";
import List from "../components/List.jsx";
import { filter } from "../helper/filter.js";
export default function ({ data }) {
	return (
		<ul>
			{data.map((todo, i) => {
				console.log(todo.content);
				const finisedTime = filter(todo.finishedTime);
				console.log(finisedTime);
				return (
					<List key={todo.id}>
						<div>{todo.content}</div>
						<div style={{ float: "right" }}>
							{`${finisedTime}`} ago finished
						</div>
					</List>
				);
			})}
		</ul>
	);
}
