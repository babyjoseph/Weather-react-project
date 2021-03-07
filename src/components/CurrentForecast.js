import React from "react";
import {
  CurrentWrapper,
  IconWrapper,
  LocationWrapper,
  TempWrapper,
  LoadingContent,
} from "../styles";

export default function CurrentForecastCard({ weather }) {
  return typeof weather[0] !== "undefined" ? (
    <CurrentWrapper>
      <LocationWrapper>
        {weather[0][2]} <br /> {weather[0][3]}
      </LocationWrapper>
      <TempWrapper>
        <div className="date">{weather[0][0]}</div>
        <div className="temp">{Math.round(weather[0][1])}˚</div>
        <div className="des">{weather[0][4]}</div>
      </TempWrapper>
      <IconWrapper>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0][5]}@2x.png`}
          alt="icon"
        />
      </IconWrapper>
    </CurrentWrapper>
  ) : (
    <LoadingContent>ENTER COUNTRY NAME</LoadingContent>
  );
}
