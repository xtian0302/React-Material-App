import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success deets" />
          <h1>Thanks for Submitting</h1>
          <p>Get an email with further deets</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default Success;
