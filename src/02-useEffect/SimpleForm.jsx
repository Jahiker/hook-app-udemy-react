import { useEffect, useState } from "react";

import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //   useEffect(() => {
  //     console.log("useEffect Call");
  //   }, [formState]);

  //   useEffect(() => {
  //     console.log("Email Chnage");
  //   }, [email]);

  useEffect(() => {
    // console.log("Username Chnage");
  }, [username]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="user@example.com"
        className="form-control mb-2"
        value={email}
        onChange={onInputChange}
      />
      {username.toLowerCase() === "jahiker" && <Message />}
    </>
  );
};
