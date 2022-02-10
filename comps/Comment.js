import { useState } from "react";

const Comment = ({ handleClickSendMessage }) => {
  const [usernameValue, setUsernameValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setUsernameValue(value);
  };

  const handleMessageChange = (e) => {
    const { value } = e.target;
    setMessageValue(value);
  };

  const handleEmitMessage = () => {
    if (usernameValue && messageValue) {
      handleClickSendMessage({
        username: usernameValue,
        message: messageValue,
      });
    }
  };

  return (
    <div>
      <input type="text" name="username" onChange={handleUsernameChange} />
      <input type="text" name="message" onChange={handleMessageChange} />
      <div>{usernameValue && messageValue ? "" : "請填寫暱稱和訊息"}</div>
      <button onClick={handleEmitMessage}>發送</button>
    </div>
  );
};

export default Comment;
