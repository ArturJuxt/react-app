import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const FirstStep = ({ onChange }) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
  });

  const onDataChange = (e, fieldName) => {
    const newData = {
      ...data,
      [fieldName]: e.target.value,
    };

    setData(newData);
    onChange(newData);
  };
  
  return (
    <div>
      <div>
        <TextField
          label="FirstName"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) => onDataChange(e, 'firstName')}
          value={data.firstName}
        />
      </div>
      <div>
        <TextField
          label="LastName"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) => onDataChange(e, 'lastName')}
          value={data.lastName}
        />
      </div>
      <div>
        <TextField
          label="Contact"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) => onDataChange(e, 'contact')}
          value={data.contact}
        />
      </div>
    </div>
  );
};

export default FirstStep;
