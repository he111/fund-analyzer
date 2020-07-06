import React, { useRef } from 'react';
import "./App.css";
import GeneralDetailComponent from "./components/GeneralDetailComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import HighChartsComponent from "./components/HighchartsComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDollarSign, faChartLine, faTags, faInfoCircle, faPrint } from "@fortawesome/free-solid-svg-icons";
import HeaderComponent from "./components/HeaderComponent";

import AOEComponent from './components/AOEComponent';

const scrollToRef = (ref) => {
  window.scrollTo(0,ref.current.offsetTop);
}

function App() {
   const {infoRef, chartRef, feeRef, discountRef} = useRef(null);
   const executeScroll = (ref) => scrollToRef(ref);
  return (
    <div>
      <HeaderComponent />
      <Nav
        variant="pills"
        defaultActiveKey="/home"
        className="flex-column sidebar"
        fixed="left"
      >
        <Nav.Item>
          <Nav.Link className="side-text" href="executeScroll(infoRef)">
            <FontAwesomeIcon icon={faDollarSign} className="fa-icon" />
            Info
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="side-text" href="executeScroll(chartRef)">
            <FontAwesomeIcon icon={faChartLine} className="fa-icon" />
            Over time
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="side-text" href="executeScroll(feeRef)">
            <FontAwesomeIcon icon={faTags} className="fa-icon" />
            Fee
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="side-text" href="executeScroll(discountRef)">
            <FontAwesomeIcon icon={faInfoCircle} className="fa-icon" />
            Discount
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="side-text" eventKey="share">
            <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
            Share
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="side-text" eventKey="print">
            <FontAwesomeIcon icon={faPrint} className="fa-icon" />
            Print
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Container>
        <Row>
          <Col>
            <Row>
              <GeneralDetailComponent ref={infoRef} />
            </Row>
            <Row className="graph" ref={chartRef}>
              <HighChartsComponent />
            </Row>
          </Col>
        </Row>
        <Row ref={feeRef}>
          <AOEComponent />
        </Row>
        <Row ref={discountRef}>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
