import { useEffect, useState } from "react";
import Clock from "./componnent/Clock";
import UserComment from "./componnent/comments/UserComment";
import "./App.css";
const App = () => {
  const [today, setToday] = useState(new Date());
  useEffect(() => {
    const duration = 1000;
    const id = setInterval(() => {
      setToday(new Date());
    }, duration);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <Clock today={today} />
      <UserComment />
    </div>
  );
};

export default App;
