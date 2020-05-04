import React from "react";

export default function Header(props) {
  return (
    <div className="header mb-0">
      <h2 className="mt-1">{props.name}</h2>
    </div>
  );
}
