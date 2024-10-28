import React from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";

const Messages = () => {
  const { loading, messages } = useGetMessage();
  console.log(messages);
  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message}></Message>
        ))
      )}
      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[35%]">
            say! hii to start the conversation
          </p>
        </div>
      )}
    </div>
  );
};
// className="flex-1 overflow-y-auto" style={{minHeight:"calc(92vh - 8vh)"}}
export default Messages;
