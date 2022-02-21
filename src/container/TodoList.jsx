import React from "react";
import List from "../components/List.jsx";
export default function ({ data, clickHandler }) {
	return (
		<ul>
			{data.map((todo, i) => {
				if (todo.finished) {
					return null;
				} else {
					return (
						<List key={todo.id}>
							<div>{todo.content}</div>
							<button
								style={{ float: "right" }}
								onClick={(event) =>
									clickHandler(event, todo, i)
								}>
								Finished
							</button>
						</List>
					);
				}
			})}
		</ul>
	);
}
