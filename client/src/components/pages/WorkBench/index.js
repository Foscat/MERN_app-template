import React, { Component } from 'react';
  // Comment out to prevent warnings when needed they are here for easy access 
import { Row } from 'reactstrap';
import TextCard from '../../parts/TextCard';
import API from '../../../utils/API';
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

  handleSubmit(event) {
    event.preventDefault();
    console.log("Event.target", event.target);
    const data = new FormData(event.target);
    console.log("Data:", data)
    API.addUser(event.target).then(res=>console.log("form res", res));
  }

  render() {
    return (
      <Row style={styles.box} className="pt-5">
        <TextCard 
          className="mx-auto"
          title="Welcome to your workbench"
          subtitle="Use this to build components away from rest of app"
        >
          <h3 className="text-center">{this.state.input}</h3>
          <input className="form-control" name="input" type="text" onChange={this.handleInputChange}></input>
        </TextCard>
        
      </Row>
    );
  }

}

const styles = {
  box: {
    backgroundColor: "#efee"
  }
}

export default WorkBench;