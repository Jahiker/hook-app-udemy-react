import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { username, email, password, formState, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
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
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="form-control mb-2"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className="btn btn-warning">RESET</button>
    </>
  );
};
