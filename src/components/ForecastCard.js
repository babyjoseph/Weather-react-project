import React, { useEffect, useRef } from "react";
import { Card, CardWrapper } from "../styles";

export default function ForecastCard({ weather }) {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = useRef(null);
  useEffect(() => {
    if (typeof weather[0] !== "undefined") {
      //run something here
      days.current = weather.map((v, i, a) => {
        return (
          <Card key={i}>
            <div className="day">
              {week[a[i][0]]} - {Math.round(a[i][1])}˚
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${a[i][2]}@2x.png`}
              alt="icon"
            />
          </Card>
        );
      });
    } else return;
  }, [weather]);
  return <CardWrapper>{days.current}</CardWrapper>;
}
