import React from "react";
import { Card, CardWrapper, StyledLink } from "../styles";

export default function ForecastCard({ weather }) {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return typeof weather[0] !== "undefined" ? (
    <CardWrapper>
      {weather.map((v, i, a) => {
        return (
          <StyledLink key={i} to={`/${i === 0 ? "" : i}`} draggable="false">
            <Card data-cardindex={i}>
              <div className="day">
                {week[a[i][0]]} | {Math.round(a[i][2])}˚C
              </div>
              <i className={`wi wi-owm-${a[i][4]}`}></i>
            </Card>
          </StyledLink>
        );
      })}
    </CardWrapper>
  ) : (
    ""
  );
}
