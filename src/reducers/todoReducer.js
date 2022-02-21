const authReducer = (state, action) => {
	switch (action.type) {
		case "ADDNEW":
			return state.concat(action.todoList);
		case "FINISHED":
			// state = action.todoList;
			const newState = action.todoList;
			return newState;

		default:
			return state;
	}
};

export default authReducer;
