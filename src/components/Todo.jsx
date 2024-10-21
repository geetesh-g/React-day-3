import React from "react";
import { AddTodo } from "./addTodo";
import TodoItem from "./TodoItem";

function Todo() {
	const [todo, setTodo] = React.useState([]);

	const handleAddTodo = (text) => {
		const newItem = {
			title: text,
			status: false,
			id: new Date() + Math.random,
		};

		const newTodoList = [...todo, newItem];
		setTodo(newTodoList);
	};

	return (
		<div>
			<AddTodo handleAddTodo={handleAddTodo} />
			<ul style={{ textAlign: "center" }}>
				{todo.map((item) => {
					return (
						<TodoItem key={item.id} title={item.title} status={item.status} />
					);
				})}
			</ul>
		</div>
	);
}

export default Todo;
