import CohortDetails from "./CohortDetails";

const cohorts = [
  { name: "Java FSE - Batch 12", status: "ongoing", startDate: "2026-06-01", trainer: "Syed Khaleelullah" },
  { name: ".NET FSE - Batch 9", status: "completed", startDate: "2026-01-10", trainer: "Elisa Jones" },
  { name: "React Bootcamp - Batch 4", status: "ongoing", startDate: "2026-07-01", trainer: "Jojo Jose" }
];

function App() {
  return (
    <div>
      <h1>My Academy Cohort Dashboard</h1>
      {cohorts.map((c, i) => (
        <CohortDetails key={i} {...c} />
      ))}
    </div>
  );
}

export default App;
