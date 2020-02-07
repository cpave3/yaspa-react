import React, { useState, FormEvent } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import firebase, { database } from '../firebase';

const GetStarted = () => {
  const [code, setCode] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

  

  return (
    <form>
      <InputField value={code} onChange={setCode} placeholder="room code" />
      <Button text="Start new sessions" />
    </form>
  );
};

export default GetStarted;
