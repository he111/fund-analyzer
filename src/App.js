import React, { useRef } from 'react';
import "./App.css";
import GeneralDetailComponent from "./components/GeneralDetailComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import HighChartsComponent from "./components/HighchartsComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDollarSign, faChartLine, faTags, faInfoCircle, faPrint } from "@fortawesome/free-solid-svg-icons";

const scrollToRef = (ref) => {
  window.scrollTo(0,ref.current.offsetTop);
}

function App() {
   const {infoRef, chartRef, feeRef, discountRef} = useRef(null);
   const executeScroll = (ref) => scrollToRef(ref);
  return (
    <div>
      <Navbar sticky="top" bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="fundanalyzer.png"
            alt="fund analyzer"
            width="30"
            height="30"
          />
          Fund Analyzer
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="danger">Analyze >></Button>
        </Form>
      </Navbar>
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
          <Col>Annual Operating Expenses</Col>
          <Col>Front-End Sales Charges</Col>
          <Col>Back-End Sales Charges(CDSC)</Col>
          <Col>Redemption Fees</Col>
        </Row>
        <Row ref={discountRef}>
          <Row>
            <Col>Letters of Intent (LOI) Allowed</Col>
          </Row>
          <Row>
            <Col>Sales Charge Waiver</Col>
          </Row>
          <Row>
            <Col>Contingment Deferred Sales Charge (CDSC)</Col>
          </Row>
          <Row>
            <Col>Rights of Accumulation (ROA) Allowed</Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default App;