import React, { Component } from "react";
import { Input } from "rsuite";
import TextCard from "../../parts/TextCard";

/* What I am building today:
  -
*/

/**
 * @component WorkBench
 * @description A component to test out new features and build components away from the rest of the app, to avoid breaking things while building
 */
class WorkBench extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  // When the component loads log the state
  componentDidMount() {
    console.log("Mount state:", this.state);
  }

  // When component updates log its state
  componentDidUpdate() {
    console.log("Update state:", this.state);
  }

  // General handler for inputs whose value is to change the state
  // If state does not exist it makes a state field with its name
  handleInputChange = (value) => {
    this.setState({
      input: value
    });
  };

  render() {
    return (
      <section className="container section">
        <TextCard
          title="Welcome to your workbench"
          subtitle="Use this to build components away from rest of app"
          className="workbench-card"
        >
          <div className="stack">
            <h3 className="preview-heading">
              {this.state.input || "Live preview appears here as you type."}
            </h3>
            <Input
              className="themed-input"
              name="input"
              value={this.state.input}
              onChange={this.handleInputChange}
              placeholder="Type here to test component behavior"
            />
          </div>
        </TextCard>
      </section>
    );
  }
};

export default WorkBench;
