import { useRouteLoaderData } from "react-router-dom";
import MovieCard from "../components/Card/Card";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

const Films = () => {
  const data = useRouteLoaderData("films");
	const [films, setFilms] = useState(data?.data);
	console.log(films);
  console.log(data);
  return (
    <Row className="mt-3">
      {data.data.map((film) => (
        <Col className="mb-3" sm={6} lg={3} key={film.id}>
          <MovieCard {...film} />
        </Col>
      ))}
    </Row>
  );
};

export default Films;
