import React from 'react';
import StackedChartComponent from "./StackedChartComponent";
import {  Row, Col } from "react-bootstrap";

function AOEComponent() {
    return (
      <Row className="outter-grid">
        <Col xs={1} lg={5} >
          <div className="AOE-detail">Annual Operating Expenses</div>
          <div className="AOE-detail">
            N/A
          </div>
        </Col>
        <Col className="show-left-grid" lg={2}>
          <div className="AOE-detail">Front-End Sales Charges</div>
          <div className="AOE-detail">N/A</div>
        </Col>
        <Col className="show-left-grid" lg={3}>
          <div className="AOE-detail">Back-End Sales Charges(CDSC)</div>
          <div className="AOE-detail">N/A</div>
        </Col>
        <Col className="show-left-grid" lg={1}>
          <div className="AOE-detail">Redemption Fees</div>
          <div className="AOE-detail">N/A</div>
        </Col>
      </Row>
    );
}

export default AOEComponent
// <StackedChartComponent />
