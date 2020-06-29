import React from 'react';
// import "./App.css";
import {
  Nav,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faDollarSign,
  faChartLine,
  faTags,
  faInfoCircle,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

function SidebarComponent() {
    return (
      <div>
        <Nav
          variant="pills"
          defaultActiveKey="/home"
          className="flex-column sidebar"
          fixed="left"
        >
          <Nav.Item>
            <Nav.Link className="side-text" href="#info">
              <FontAwesomeIcon icon={faDollarSign} className="fa-icon" />
              Info
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="side-text" href="#overtime">
              <FontAwesomeIcon icon={faChartLine} className="fa-icon" />
              Over time
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="side-text" href="#fee">
              <FontAwesomeIcon icon={faTags} className="fa-icon" />
              Fee
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="side-text" href="#discount">
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
      </div>
    );
}

export default SidebarComponent;
