import type { FC } from "react";
import "./clock.css";

export type ClockProps = {
  today: Date;
};

const Clock: FC<ClockProps> = ({ today }) => {
  return (
    <div className="clock">
      <h1>{today.toLocaleTimeString()}</h1>
      <h2>{today.toLocaleDateString()}</h2>
    </div>
  );
};

export default Clock;
