import './button.css';
export function Button({
	title,
	backgroundColor = '#052A78'
}: {
	title: string;
	backgroundColor?: string;
}) {
	return (
		<button className="button" style={{ backgroundColor: backgroundColor }}>
			{title}
		</button>
	);
}
