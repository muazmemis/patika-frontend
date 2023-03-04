import React, { useState } from "react";

function InputExample() {
  const [name, setName] = useState("Muaz");
  const [surname, setSurname] = useState("Memiş");
  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeName = (e) => setName(e.target.value);
  const onChangeSurname = (e) => setSurname(e.target.value);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      Name
      <br />
      {/* <input value={name} onChange={(e) => setName(e.target.value)}></input> */}
      {/* <input value={name} onChange={onChangeName}></input> */}
      <input name="name" value={form.name} onChange={onChangeInput}></input>
      <br />
      <br />
      Surname
      <br />
      {/* <input value={surname} onChange={onChangeSurname}></input> */}
      <input
        name="surname"
        value={form.surname}
        onChange={onChangeInput}
      ></input>
      <h2>
        {/* {name} {surname} */}
        {form.name} {form.surname}
      </h2>
    </div>
  );
}

export default InputExample;
