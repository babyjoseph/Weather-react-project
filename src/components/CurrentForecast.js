import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  CurrentWrapper,
  IconWrapper,
  LocationWrapper,
  TempWrapper,
  EnterCountry,
} from "../styles";

export default function CurrentForecastCard({ weather, myRef }) {
  return typeof weather[0] !== "undefined" ? (
    <Switch>
      {weather.map((v, i, a) => {
        return (
          <Route exact key={i} path={`/${i === 0 ? "" : i}`}>
            <CurrentWrapper ref={myRef}>
              <LocationWrapper>
                {a[i][5]} <br /> {a[i][6]}
              </LocationWrapper>
              <TempWrapper>
                <div className="date">{a[i][1]}</div>
                <div className="temp">{Math.round(a[i][2])}˚C</div>
                <div className="des">{a[i][3]}</div>
              </TempWrapper>
              <IconWrapper>
                <i className={`wi wi-owm-${a[i][4]}`}></i>
              </IconWrapper>
            </CurrentWrapper>
          </Route>
        );
      })}
    </Switch>
  ) : (
    <EnterCountry>ENTER CITY NAME</EnterCountry>
  );
}
