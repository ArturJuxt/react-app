import React from "react";
import s from './HookStep.module.css';
import HookUserForm from './HookUserForm';

const Help = () => {
  return (
    <div className={s.hookStep}>
      <HookUserForm />
    </div>
  );
};

export default Help;
