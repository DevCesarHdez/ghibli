import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Film = () => {
  const { data } = useLoaderData();
  console.log(data);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <Row>
      <Col className="mt-3" xs={12} md={6}>
        <h2>
          {data?.title ?? "No title"} ({data?.release_date ?? "No release date"}
          )
        </h2>
        <Image src={data.image} alt={data?.title} fluid rounded />
      </Col>
      <Col className="mt-3 d-md-flex align-items-center" xs={12} md={6}>
				<div>
	        <p>{data?.description}</p>
					<ListGroup>
						<ListGroup.Item>
							<span className="fw-bold">Title: </span>
							{data?.title} / {data?.original_title ?? "No title"}
						</ListGroup.Item>
						<ListGroup.Item>
							<span className="fw-bold">Director: </span>
							{data?.director}
						</ListGroup.Item>
						<ListGroup.Item>
							<span className="fw-bold">Score: </span>
							{data?.rt_score}
						</ListGroup.Item>
						<ListGroup.Item>
							<span className="fw-bold">Running time: </span>
							{data?.running_time}
						</ListGroup.Item>
					</ListGroup>
				</div>
      </Col>
    </Row>
  );
};

export default Film;
