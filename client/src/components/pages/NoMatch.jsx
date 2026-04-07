import React from "react";
import FlexTron from "../parts/FlexTron";

/**
 * @component NoMatch
 * @description A component to display when a URL route does not match any existing routes, showing a 404 error message.
 */
function NoMatch() {
  return (
    <section className="container section">
      <FlexTron
        className="not-found-card"
        title="Error"
        subtitle="Something went wrong with your request."
      >
        <h1 className="center-text">404 Page Not Found</h1>
        <p className="center-text text-muted">The route you requested does not exist.</p>
      </FlexTron>
    </section>
  );
};

export default NoMatch;
