import React, { Component } from 'react';
  // Comment out to prevent warnings when needed they are here for easy access 
// import { Container, Row, Col, Button  } from 'reactstrap';
import TextCard from '../../parts/TextCard';
// import API from '../../../utils/API';
// import SweetAlert from 'react-bootstrap-sweetalert';



/* What I am building today: 
  -
*/

class WorkBench extends Component {

  constructor(props) {
    super(props);

    this.state={

    }
  }

  componentDidMount(){
    console.log("Mount state:", this.state);
  }

  componentDidUpdate(){
    console.log("Update state:", this.state);
  }

  // General handler for inputs thats value is to change the state
  // If state does not exsist it makes a state field with its name
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div style={styles.box} className="row pt-5">
        <TextCard 
          className="mx-auto"
          title="Welcome to your workbench"
          subtitle="Use this to build components away from rest of app"
        >
          <h3 className="text-center">{this.state.input}</h3>
          <input className="form-control" name="input" type="text" onChange={this.handleInputChange}></input>
        </TextCard>
        
      </div>
    );
  }

}

const styles = {
  box: {
    backgroundColor: "#efee"
  }
}

export default WorkBench;