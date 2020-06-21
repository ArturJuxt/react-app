import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const SecondStep = ({ onChange }) => {
  const [data, setData] = useState({
    email: "",
    country: "",
    district: "",
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
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={data.email}
          onChange={(e) => onDataChange(e, "email")}
        />
      </div>
      <div>
        <TextField
          label="Country"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={data.country}
          onChange={(e) => onDataChange(e, "country")}
        />
      </div>
      <div>
        <TextField
          label="District"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={data.district}
          onChange={(e) => onDataChange(e, "district")}
        />
      </div>
    </div>
  );
};

export default SecondStep;
