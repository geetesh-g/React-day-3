import { useState } from "react";

function AddTodo({ handleAddTodo }) {
	const [text, setText] = useState("");

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const onClick = () => {
		handleAddTodo(text);
		setText("");
	};

	return (
		<div>
			<input value={text} onChange={handleChange} placeholder="Enter todo" />
			<button onClick={onClick}> Add Todo </button>
		</div>
	);
}

export { AddTodo };
