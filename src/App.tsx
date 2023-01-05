import { useState } from "react";
import ShowList from "./components/ShowList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-red-500">
      {" "}
      <ShowList />
    </div>
  );
}

export default App;
