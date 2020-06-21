import React, { useState, useMemo } from "react";
import s from "./StepForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import FirstStep from "../../../Components/MultiStepForm/FirstStep/FirstStep";
import SecondStep from "../../../Components/MultiStepForm/SecondStep/SecondStep";
import ThirdStep from "../../../Components/MultiStepForm/ThirdStep/ThirdStep";
import DisplayData from "./DisplayData/DisplayData";
import { Stepper, StepLabel, Step, Button } from "@material-ui/core";
import { addUser } from "../../../Store/Actions/User";
import { getUsers } from "../../../Store/Selectors/User";

const StepForm = () => {
  const user = useSelector(getUsers);
  const [currentUser, setCurrentUser] = useState(user);
  const [step, setStep] = useState(0);

  const dispatch = useDispatch();

  const onSaveClicked = () => {
    dispatch(addUser(currentUser));
    setCurrentUser({});
  };

  const disabled = useMemo(() => {
    return (
      !currentUser.firstName || !currentUser.lastName || !currentUser.contact
    );
  }, [currentUser.firstName, currentUser.lastName, currentUser.contact]);

  function showStep() {
    switch (step) {
      case 0:
        return (
          <FirstStep
            onChange={(data) => {
              setCurrentUser({
                ...currentUser,
                ...data,
              });
            }}
            data={{ ...currentUser }}
          />
        );
      case 1:
        return (
          <SecondStep
            onChange={(data) => {
              setCurrentUser({
                ...currentUser,
                ...data,
              });
            }}
            data={{ ...currentUser }}
          />
        );
      case 2:
        return (
          <ThirdStep
            onChange={(data) => {
              setCurrentUser({
                ...currentUser,
                ...data,
              });
            }}
            data={{ ...currentUser }}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className={s.stepForm}>
      <div className={s.center_stepper}>
        <Stepper
          className={s.stepper}
          activeStep={step}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep()}
      <div>
        {step > 0 && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setStep((s) => s - 1)}
          >
            Back
          </Button>
        )}
        <span> </span>
        {step === 0 && (
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setStep((s) => s + 1)}
            disabled={disabled}
          >
            Next
          </Button>
        )}
        <span> </span>
        {step === 1 && (
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setStep((s) => s + 1)}
          >
            Next
          </Button>
        )}
        <span> </span>
        {step === 2 && (
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => {
              onSaveClicked();
              setStep(0);
            }}
          >
            Submit
          </Button>
        )}
      </div>
      <div>{user.length > 0 && <DisplayData />}</div>
    </div>
  );
};

export default StepForm;
