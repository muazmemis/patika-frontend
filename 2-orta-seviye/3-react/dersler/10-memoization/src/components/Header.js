import React from "react";

// function Header({ number, data }) {
function Header({ increment }) {
  console.log("Header re-rendered");
  return (
    <div>
      {/* Header - {number} */}
      Header
      <br />
      <br />
      {/* <code>{JSON.stringify(data)}</code> */}
      <button onClick={increment}>increase</button>
    </div>
  );
}

export default React.memo(Header);
