import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useCallback, useEffect } from "react";

import Comment from "../comps/Comment";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Post from "../comps/post";
import Sketch from "../comps/Sketch";

export default function Home() {
  const socketUrl = "ws://localhost:3000/wss";

  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(socketUrl, {
    onOpen: () => console.log("opened"),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
  });

  const [responses, setResponse] = useState([]);
  const [previousMessageTime, setPreviousMessageTime] = useState("");

  const handleClickSendMessage = useCallback((data) => {
    sendJsonMessage(data);
  }, []);

  // // Subscribe to WebSocket and manage messages
  const message = lastMessage && JSON.parse(lastMessage.data);
  if (message && previousMessageTime !== message.time) {
    console.log(message);
    setPreviousMessageTime(message.time);
    setResponse((oldArray) => [...oldArray, message]);
  }

  return (
    <div>
      <Comment handleClickSendMessage={handleClickSendMessage} />
      <Post responses={responses} />
      <Sketch />
    </div>
  );
}
