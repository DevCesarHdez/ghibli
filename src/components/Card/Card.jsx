import { Card } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({title, description, image, id}) => {
	const [opacity, setOpacity] = useState("0");
  return <Card className="position-relative" onMouseEnter={_ => setOpacity( "100") } onMouseLeave={_ => setOpacity("0") } >
		<Link className="position-absolute w-100 h-100" to={id} style={{zIndex: 1}}>
			<span className="d-none">
				{title}
			</span>
		</Link>
		<Card.Img src={image} alt={title} />
		<Card.ImgOverlay className={`bg-dark opacity-${opacity}`}>
			<Card.Body className="text-white">
				<Card.Title>
					{title}
				</Card.Title>
				<Card.Text className="card-description">{description}</Card.Text>
			</Card.Body>
		</Card.ImgOverlay>
	</Card>
}

export default MovieCard;