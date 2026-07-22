import React from "react";
import { useParams } from "react-router-dom";
import trainersMock from "./trainersMock";

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainersMock.find((t) => t.trainerId === id);

  if (!trainer) {
    return <h2>Trainer not found</h2>;
  }

  return (
    <div>
      <h1>Trainers Details</h1>
      <h3>{trainer.name} ({trainer.technology})</h3>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>
      <ul>
        {trainer.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerDetails;
