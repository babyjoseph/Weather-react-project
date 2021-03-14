import React, { useState, useEffect } from "react";
//STYLES
import { MainWrapper } from "./styles";
import GlobalStyle from "./GlobalStyle";
//API
import { FetchNextDays } from "./api/GetWeather";
import { CurrentForecast, Forecast, SearchBar } from "./components";
//ROUTER
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [searchQueue, setSearchQueue] = useState("");
  const [weatherDays, setWeatherDays] = useState({});
  const [error, setError] = useState(false);

  //Handle Search Queue change
  const handleQueueChange = (e) => {
    setSearchQueue((prevQueue) => (prevQueue = e.target.value));
  };

  //Handle Entered Queue
  const enterKeyQueue = async (keyEvent) => {
    if (keyEvent.key === "Enter") {
      const weatherData = await FetchNextDays(searchQueue);
      // console.log(weatherData);
      if (weatherData === undefined) {
        setError((prevError) => (prevError = true));
        alert("Unknown city");
      } else {
        setError((prevError) => (prevError = false));
        setWeatherDays(
          (prevDay) => (prevDay = weatherData.map((days) => days))
        );
      }
      setSearchQueue((prevQueue) => (prevQueue = ""));
    }
  };
  return (
    <>
      <GlobalStyle />
      <Router>
        <MainWrapper>
          <SearchBar
            setSearchQueue={setSearchQueue}
            searchQueue={searchQueue}
            handleChange={handleQueueChange}
            keyPressed={enterKeyQueue}
          />
          <CurrentForecast weather={weatherDays} />
          <Forecast weather={weatherDays} />
        </MainWrapper>
      </Router>
    </>
  );
}

export default App;
