import { useState, useEffect } from "react";

export default function Timer({ hours = 0, minutes = 0, seconds = 0 }): JSX.Element {
  const [over, setOver] = useState(false);
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (over) return;

    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <>
      {`${h.toString().padStart(2, '0')}:${m
        .toString()
        .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}
    </>
  );
};