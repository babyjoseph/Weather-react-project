import React, { useEffect, useRef } from "react";
import { Card, CardWrapper, StyledLink } from "../styles";

export default function ForecastCard({ weather }) {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = useRef(null);
  useEffect(() => {
    if (typeof weather[0] !== "undefined") {
      days.current = weather.map((v, i, a) => {
        return (
          <StyledLink to={`/${i}`}>
            <Card key={i} data-cardindex={i}>
              <div className="day">
                {week[a[i][0]]} | {Math.round(a[i][2])}˚C
              </div>
              <img
                src={`http://openweathermap.org/img/wn/${a[i][4]}@2x.png`}
                alt="icon"
              />
            </Card>
          </StyledLink>
        );
      });
    } else return;
  }, [weather]);
  return <CardWrapper>{days.current}</CardWrapper>;
}
