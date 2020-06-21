import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const HookFormUserDetal = (props) => {
  const continues = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const { values, handleChange } = props;
  return (
    <div>
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Detalis" />
          <TextField
            hintText="Enter your first name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter your last name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={continues}
          />
        </React.Fragment>
      </MuiThemeProvider>
    </div>
  );
};

const styles = {
  button: {
    margin: 15,
  },
};
export default HookFormUserDetal;
