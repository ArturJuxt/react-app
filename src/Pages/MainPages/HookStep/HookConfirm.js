import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const HookConfirm = (props) => {
  const continues = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = props;
    return (
      <div>
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem primaryText="Firs tName" secondaryText={firstName} />
              <ListItem primaryText="Last Name" secondaryText={lastName} />
              <ListItem primaryText="Email" secondaryText={email} />
              <ListItem primaryText="Occupation" secondaryText={occupation} />
              <ListItem primaryText="City" secondaryText={city} />
              <ListItem primaryText="Bio" secondaryText={bio} />
            </List>
            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={back}
            />
            <RaisedButton
              label="Confirm & Continue"
              primary={true}
              style={styles.button}
              onClick={continues}
            />
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
}

const styles = {
  button: {
    margin: 15,
  },
};

export default HookConfirm;
