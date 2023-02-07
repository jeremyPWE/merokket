import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

function Time({ className }) {
  const [time, setTime] = useState(DateTime.local().setZone("Asia/Jakarta"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTime.local().setZone("Asia/Jakarta"));
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return <p className={className}>SUB-IDN/ {time.toFormat("HH.mm a")}</p>;
}

export default Time;
