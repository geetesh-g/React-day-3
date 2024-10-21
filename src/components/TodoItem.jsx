export default function TodoItem({ id, title, status }) {
	const style = {
		width: "200px",
		margin: "auto",
	};
	return (
		<li id={id} style={style}>
			{title} - {status ? "Completed" : "Not Completed"}
		</li>
	);
}
