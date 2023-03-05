import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Muaz",
      phone_number: 2139,
    },
    {
      fullname: "Mehmed",
      phone_number: 123,
    },
    {
      fullname: "Murat",
      phone_number: 53445,
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
