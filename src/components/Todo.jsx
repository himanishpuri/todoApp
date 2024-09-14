import { Button } from "@mui/material";
import { useState } from "react";
import useTodo from "../contexts/Context";
import PropTypes from "prop-types";

function Todo({ message, id, completed }) {
	const [edit, setEdit] = useState(false);
	const [msg, setMsg] = useState(message);
	const { deleteTodo, editTodo, toggleComplete } = useTodo();

	const handleEdit = () => {
		setEdit((prev) => !prev);
		editTodo(id, msg);
	};

	const handleToggleComplete = () => {
		toggleComplete(id);
	};

	const text_toDo_Done = "line-through text-gray-400";

	return (
		<div className="bg-gray-600/40 p-4 py-5 w-screen max-w-1.5xl text-xl text-white rounded-lg border-gray-400 border-1 my-2 flex justify-around gap-x-2.5 items-center flex-1">
			<input
				className="accent-red-500 scale-125 align-baseline cursor-pointer"
				type="checkbox"
				defaultChecked={completed}
				onChange={handleToggleComplete}
			></input>
			<input
				className={`w-full  rounded-lg ${
					!edit
						? "bg-transparent cursor-default"
						: "bg-gray-400/20 cursor-text"
				} px-3 py-2 text-white outline-none ${
					completed ? text_toDo_Done : ""
				}`}
				type="text"
				value={msg}
				readOnly={!edit}
				onChange={(e) => setMsg(e.currentTarget.value)}
			></input>
			<Button
				variant="contained"
				size="large"
				sx={{
					color: "black",
					boxShadow: 3,
					fontSize: "1rem",
					padding: "0.25rem 1rem",
					backgroundColor: completed ? "gray" : "lightgray",
					transition: "background-color 200ms", // Equivalent to duration-200
					"&:hover": {
						backgroundColor: "gray",
					},
				}}
				onClick={handleEdit}
				disabled={completed}
			>
				{!edit ? "Edit" : "Save"}
			</Button>
			<Button
				variant="contained"
				size="large"
				sx={{
					color: "black",
					boxShadow: 3,
					fontSize: "1rem",
					padding: "0.25rem 1rem",
					letterSpacing: "0rem",
					backgroundColor: completed ? "gray" : "#D1D5DB",
					transition: "background-color 200ms", // Equivalent to duration-200
					"&:hover": {
						backgroundColor: "gray",
					},
				}}
				onClick={() => {
					deleteTodo(id);
				}}
				disabled={completed}
			>
				Delete
			</Button>
		</div>
	);
}

Todo.propTypes = {
	message: PropTypes.string,
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	completed: PropTypes.bool.isRequired,
};

export default Todo;
