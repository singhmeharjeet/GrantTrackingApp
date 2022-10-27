import React from "react";
import "./Add.css";
import FormInput from "../FormInput/FormInput";
function Add() {
  return (
    <div className="add">
      <FormInput placeholder="FormID" />
      <FormInput placeholder="Appointment Start Date" />
      <FormInput placeholder="Appointment End Date" />
      <FormInput placeholder="Appointment Amount" />
      <FormInput placeholder="Funding Source" />
      <FormInput placeholder="FAST Track Balance" />
      <FormInput placeholder="Grant Start Funding" />
      <FormInput placeholder="Grant End Funding" />
    </div>
  );
}

export default Add;
