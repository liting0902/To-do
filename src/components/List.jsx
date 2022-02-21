import React, { memo } from "react";

function List({ children }) {
	return (
		<div
			style={{
				border: "1px gray solid",
				width: "80%",
				height: "3rem",
				padding: ".6rem",
			}}>
			{children}
		</div>
	);
}
export default List;
