import { Link, useLoaderData } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Search from "../Search/Search";
import useFilterFilm from "../../hooks/useFilterFilm"

const NavBar = () => {
  const data = useLoaderData();
	const {films, filter, filteredFilms, setFilter} = useFilterFilm(data.data);
  console.log(films);
  return (
    <Navbar
      expand="xl"
      className="bg-body-tertiary position-sticky top-0"
      style={{ zIndex: 2 }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Ghibli App
        </Navbar.Brand>
        <Search className="ms-auto" {...{filter, setFilter, filtered: filteredFilms}} />
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/films">
            Films
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
