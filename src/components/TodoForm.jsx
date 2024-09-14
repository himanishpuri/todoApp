import { Button, TextField } from "@mui/material";
import useTodo from "../contexts/Context";
import { useState, useRef } from "react";

function TodoForm() {
	const [todoMsg, setTodoMsg] = useState("");
	const { addTodo } = useTodo();
	const textFieldRef = useRef(null);

	const handleAdd = function () {
		if (todoMsg.length > 0) addTodo(todoMsg);
		else alert("Enter a Valid String");
		setTodoMsg("");
		textFieldRef.current.blur();
	};

	return (
		<div className="bg-gray-600/70 flex justify-around p-4 rounded-xl items-center gap-x-5 w-screen max-w-2xl">
			{/* <input
				className="w-10/12 rounded-lg px-4 py-2 placeholder:text-gray-400 placeholder:font-medium border-3 border-black"
				type="text"
				placeholder="TODO"
				value={todoMsg}
				onChange={(e) => setTodoMsg(e.currentTarget.value)}
			/> */}
			<TextField
				label="Enter your Todo"
				variant="outlined"
				value={todoMsg}
				onChange={(e) => setTodoMsg(e.currentTarget.value)}
				inputRef={textFieldRef}
				sx={{
					width: "100%",
					"& .MuiOutlinedInput-root": {
						borderRadius: "0.65rem",
						"& fieldset": {
							borderColor: "white",
							borderWidth: "1px",
						},
						"&:hover fieldset": {
							borderColor: "white",
						},
						"&.Mui-focused fieldset": {
							borderColor: "#ccc",
						},
						"& input": {
							color: "white",
							fontSize: "1.25rem",
						},
					},
					"& .MuiInputLabel-root": {
						color: "#ccc",
						fontSize: "1.25rem",
					},
					"& .MuiInputLabel-root.Mui-focused": {
						color: "white",
					},
				}}
			/>
			{/* <button className="bg-white text-black border-black border-2 rounded-lg px-3 py-2 font-semibold text-lg hover:border-white hover:bg-black hover:text-white duration-200" onClick={handleAdd}>
			Add
        </button> */}
			<Button
				variant="contained"
				size="large"
				sx={{
					backgroundColor: "black",
					color: "white",
					borderRadius: "0.5rem",
					transitionDuration: "400ms",
					"&:hover": {
						backgroundColor: "#9da4a8",
						color: "black",
					},
				}}
				onClick={handleAdd}
			>
				Add
			</Button>
		</div>
	);
}

export default TodoForm;
