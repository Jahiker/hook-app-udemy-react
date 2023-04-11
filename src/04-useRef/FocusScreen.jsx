import { useRef } from "react";

export const FocusScreen = () => {
  const ref = useRef(null);
  const handleClick = () => {
    console.log(ref)
    ref.current.select()
  }
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        type="text"
        placeholder="Nombre"
        className="form-control my-3"
        ref={ref}
      />
      <input type="text" placeholder="Apellido" className="form-control my-3" />
      <input
        type="text"
        placeholder="Direccion"
        className="form-control my-3"
      />

      <button className="btn btn-primary" onClick={handleClick}>Set Focus</button>
    </>
  );
};
