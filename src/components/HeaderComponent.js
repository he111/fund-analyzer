import React, {useState, useEffect} from 'react';
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFunnelDollar,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function HeaderComponent() {
    const [title, setTitle] = useState("");
    useEffect(() => {
      const fetchData = async () => {
        await axios
          .get(
            `https://my-json-server.typicode.com/he111/simple-JSON-server/profile`
          )
          .then((res) => {
            const datum = res.data;
            console.log(datum[0].name);
            setTitle(datum[0].name);
            console.log(title);
          });
      };
      fetchData();
    }, [title]);
    return (
      <div>
        <Navbar sticky="top" bg="light" variant="primary">
          <Navbar.Brand href="#home">
            {/* <img
              src="fundanalyzer.png"
              alt="fund analyzer"
              width="30"
              height="30"
            /> */}
            <FontAwesomeIcon icon={faFunnelDollar} />
            <span className="brand-text">Fund Analyzer</span>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Item>{title}</Nav.Item>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="danger">Analyze >></Button>
          </Form>
        </Navbar>
      </div>
    );
}

export default HeaderComponent
