import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };
  //PRoceed next step
  handleNextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  //Go back prev step
  handlePrevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  //Handle Field Change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            onNextStep={this.handleNextStep}
            onChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            onNextStep={this.handleNextStep}
            onBackStep={this.handlePrevStep}
            onChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            onNextStep={this.handleNextStep}
            onBackStep={this.handlePrevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
