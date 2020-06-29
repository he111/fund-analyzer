import React from 'react';
import '../App.css';
// import {Container, Row, Col} from "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";

function GeneralDetailComponent() {
    return (
      <Container>
        <Row className="show-grid" xs={1} lg={4}>
          <Col className="col-detail">
            <Col>
              <span className="col-title">Investment Objective</span>
              <div>Growth and </div>
            </Col>
            <Col>
              <span className="col-title">Morningstar Catergory</span>
              <div>Market</div>
            </Col>
            <Col>
              <span className="col-title">Morningstar Rating</span>
              <div>Year 2</div>
            </Col>
          </Col>

          <Col className="col-detail">
            <span className="col-title">Morningstar Style Box</span>
          </Col>

          <Col className="col-detail">
            <span className="col-title">1 Year Average Return</span>
          </Col>
          <Col className="col-detail">
            <span className="col-title">10 Year Average Return</span>
          </Col>
        </Row>
        <Row className="show-grid abtn" xs={1} lg={3}>
          <Col className="action-item">Tel</Col>
          <Col className="action-item">Address</Col>
          <Col className="action-item">View Fund Document</Col>
        </Row>
      </Container>
    );
}

export default GeneralDetailComponent
