import { useState } from "react";

function App() {
  const [name, setName] = useState("Muaz");
  const [age, setAge] = useState(33);
  const [friends, setFriends] = useState(["Mehmed", "Ali"]);
  const [address, setAddress] = useState({ title: "İstanbul", zip: 34000 });

  console.log(name, age);

  return (
    <div className="App">
      <h1>
        Merhaba {name} {age}
      </h1>
      <button onClick={() => setName("Musab")}>Change Name</button>
      <button onClick={() => setAge(27)}>Change Age</button>

      <hr />

      {friends.map((friend, key) => (
        <div key={key}>{friend}</div>
      ))}
      {/* <button onClick={() => setFriends([...friends, "Murat"])}> */}
      <button onClick={() => setFriends(["Murat", ...friends])}>
        Add new friend
      </button>
      <hr />
      <br />
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      {/* <button onClick={() => setAddress({ title: "Ankara", zip: 23 })}> */}
      {/* <button onClick={() => setAddress({ title: "Ankara" })}> */}
      <button onClick={() => setAddress({ ...address, title: "Ankara" })}>
        Change address
      </button>
    </div>
  );
}

export default App;
