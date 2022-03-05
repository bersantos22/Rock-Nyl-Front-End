import { useState, useEffect } from "react";
import { api } from "../../api/api";

export function ArtistList() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    async function fetchGoals() {
      try {
        const response = await api.get("/product/all-artists");
        setGoals([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchGoals();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold ">Artist List</h1>
        <h1 className="text-lg font-bold font-mono tracking-tighter text-stone-500">
          Search for your favorite artist!
        </h1>
      </div>
      <div>
        <ul>
          {goals.map((currentGoal) => {
            console.log(currentGoal);
            return <li key={currentGoal._id}>{currentGoal.artist}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
