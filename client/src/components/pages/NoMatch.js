import React from "react";
import { Col, Row, Container } from "reactstrap";
import FlexTron from "../parts/FlexTron";

// If a url route goes wrong this page is displayed 
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <FlexTron
            title="Error"
            subtitle="Something went wrong with your request"
          >
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </FlexTron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;