import React from "react";

export function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <ul>
      {IndianPlayers.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  );
}
