import { Container } from "react-bootstrap";
import NavBar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return <Container className="px-0" fluid>
		<NavBar />
		<Container className="mb-3">
			<Outlet />
		</Container>
	</Container> 
}

export default Layout