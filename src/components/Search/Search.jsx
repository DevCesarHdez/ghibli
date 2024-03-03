import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Search = ({filter, setFilter, filtered, ...propsContainer }) => {
  const [show, setShow] = useState(false);
	const [value, setValue] = useState(filter ?? "");

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
	const handleClick = () => {
		setShow(false)
		setValue("")
	}

	const handleFilter = (e) => {
		if( setFilter ) setFilter(e.target.value);
		setValue(e.target.value);
	}

  return (
    <div {...propsContainer}>
      <Button variant="outline-secondary d-flex" onClick={handleShow}>
        <span className="me-2" style={{ width: "24px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </span>
        <span>Search</span>
      </Button>
      <Modal className="mt-5" show={show} onHide={handleHide}>
        <Modal.Header>
          <Form className="w-100">
            <Form.Group className="border rounded position-relative">
              <Form.Label className="position-absolute top-50 start-0 translate-middle-y" htmlFor="search" style={{ width: "20px" }} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ms-1" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <span className="d-none">Search</span>
              </Form.Label>
              <Form.Control className="border-0 w-100 ps-4 py-2" value={ value } onChange={handleFilter} id="search" type="text" placeholder="Search" autoFocus="autofocus" />
            </Form.Group>
          </Form>
        </Modal.Header>
        <Modal.Body>
          <p>Resultados</p>
					{ value 
						? filtered?.map(item => <Link className="text-decoration-none text-white d-block py-1" to={`/films/${item.id}`} onClick={handleClick}>{item?.title}</Link>) 
						: <></> 
					}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Search;
