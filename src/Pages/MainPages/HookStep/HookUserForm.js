import React, { useState } from "react";
import HookFormUserDetal from "./HookFormUserDetal";
import HookFromPersonDetal from "./HookFormPersonDetal";
import HookConfirm from "./HookConfirm";
import HookSuccess from "./HookSuccess";

const HookUserForm = () => {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState('');
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  console.log(values , 'values');
  const nextStep = () => {
    setStep((s) => s + 1)
  };

  const prevStep = () => {
    setStep((s) => s - 1)
  };

  const handleChange = (input) => (e) => {
    setInput({
      [input]: e.target.value,
    });
  };

  switch (step) {
    case 1:
      return (
        <HookFormUserDetal
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <HookFromPersonDetal
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <HookConfirm prevStep={prevStep} nextStep={nextStep} values={values} />
      );
    case 4:
      return <HookSuccess />;
    default:
      return null;
  }
};

export default HookUserForm;
