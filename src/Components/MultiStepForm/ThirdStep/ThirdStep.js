import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const ThirdStep = ({ onChange }) => {
  const [data, setData] = useState({
    city: "",
    landmark: "",
    postCode: "",
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
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={data.city}
          onChange={(e) => onDataChange(e, "city")}
        />
      </div>
      <div>
        <TextField
          label="Landmark"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={data.landmark}
          onChange={(e) => onDataChange(e, "landmark")}
        />
      </div>
      <div>
        <TextField
          label="PostCode"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={data.postCode}
          onChange={(e) => onDataChange(e, "postCode")}
        />
      </div>
    </div>
  );
};

export default ThirdStep;
