import React from "react";
import { Link } from "react-router-dom";

function TrainersList({ trainers }) {
  return (
    <div>
      <h1>Trainers List</h1>
      <ul>
        {trainers.map((t) => (
          <li key={t.trainerId}>
            <Link to={`/trainers/${t.trainerId}`}>{t.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainersList;
