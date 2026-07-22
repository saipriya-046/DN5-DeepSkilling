import React from "react";
import { ListofPlayers } from "./ListofPlayers";
import { Scorebelow70 } from "./Scorebelow70";
import { OddPlayers, EvenPlayers } from "./OddEvenPlayers";
import { IndianPlayers } from "./IndianPlayers";
import { ListofIndianPlayers } from "./ListofIndianPlayers";

const players = [
  { name: "Player1", score: 85 },
  { name: "Player2", score: 45 },
  { name: "Player3", score: 92 },
  { name: "Player4", score: 60 },
  { name: "Player5", score: 30 },
  { name: "Player6", score: 78 },
  { name: "Player7", score: 55 },
  { name: "Player8", score: 90 },
  { name: "Player9", score: 65 },
  { name: "Player10", score: 40 },
  { name: "Player11", score: 70 }
];

const IndianTeam = ["Rohit", "Virat", "Bumrah", "Rahul", "Jadeja", "Shami"];

function App() {
  var flag = true;

  if (flag === true) {
    return (
      <div>
        <h1> List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1> List of Players having Scores Less than 70 </h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1> Indian Team </h1>
          <h1> Odd Players </h1>
          {OddPlayers(IndianTeam)}
          <hr />
          <h1>Even Players</h1>
          {EvenPlayers(IndianTeam)}
        </div>
        <hr />
        <div>
          <h1> List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}

export default App;
