import './card.css';
export function Card({
	title,
	description,
	image,
	background
}: {
	title: string;
	description: string;
	image: string;
	background: string;
}) {
	return (
		<section className="card" style={{ background: background }}>
			<img src={image} alt="" />
			<h2>{title}</h2>
			<p>{description}</p>
		</section>
	);
}
