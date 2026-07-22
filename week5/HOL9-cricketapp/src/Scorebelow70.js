import React from "react";

export function Scorebelow70({ players }) {
  const players70 = [];
  return (
    <div>
      {players.map((item) => {
        if (item.score <= 70) {
          players70.push(item);
        }
      })}
      {players70.map((item) => (
        <div key={item.name}>
          <li>Mr. {item.name}<span> {item.score} </span></li>
        </div>
      ))}
    </div>
  );
}
