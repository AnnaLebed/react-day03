import React from "react";

export default function MessagesBox(props) {
  console.log(props.messages);
  return (
    <div className="messages-box">
      {props.messages.map((el) => {
        return <div key={`${el}`}> {el} </div>;
      })}
    </div>
  );
}
