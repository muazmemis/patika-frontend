import React, { useEffect } from "react";
import { init } from "../socketApi";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

function Container() {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
