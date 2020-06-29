import React from 'react';
import '../App.css';
// import {Container, Row, Col} from "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Button} from "react-bootstrap";


function GeneralDetailComponent() {
    return (
      <Container>
        <Row className="show-grid" xs={1} lg={4}>
          <Col className="col-detail">
            <Col>
              <span className="col-title">Investment Objective</span>
              <div>Growth and Income</div>
            </Col>
            <Col>
              <span className="col-title">Morningstar Catergory</span>
              <div>Perferred Stock</div>
            </Col>
            <Col>
              <span className="col-title">Morningstar Rating</span>
            </Col>
          </Col>

          <Col className="col-detail">
            <span className="col-title">Morningstar Style Box</span>
            <div>N/A</div>
          </Col>

          <Col className="col-detail">
            <Col>
              <span className="col-title">1 Year Average Return</span>
              <div>N/A</div>
            </Col>
            <Col>
              <span className="col-title">3 Year Average Return</span>
              <div>N/A</div>
            </Col>
            <Col>
              <span className="col-title">5 Year Average Return</span>
              <div>N/A</div>
            </Col>
          </Col>
          <Col className="col-detail">
            <Col>
              <span className="col-title">10 Year Average Return</span>
              <div>N/A</div>
            </Col>
            <Col>
              <span className="col-title">Return Since Inception</span>
              <div className="RSI">-3.5%</div>
            </Col>
            <Col>
              <span className="col-title">Minimum Initial Purchase</span>
              <div>N/A</div>
            </Col>
          </Col>
        </Row>
        <Row className="show-grid abtn" xs={1} lg={3}>
          <Col className="action-item action-border">
            <Button className="tel-btn detail-btn" variant="link">
              Tel
            </Button>
          </Col>
          <Col className="action-item action-border">
            <Button className="address-btn detail-btn" variant="link">
              Address
            </Button>
          </Col>
          <Col className="action-item">
            <Button className="fund-btn detail-btn">View Fund Document</Button>
          </Col>
        </Row>
      </Container>
    );
}

export default GeneralDetailComponent
