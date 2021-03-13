import React, { useState, useEffect } from "react";
//STYLES
import { MainWrapper } from "./styles";
//API
import { FetchNextDays } from "./api/GetWeather";
import { CurrentForecast, Forecast, SearchBar } from "./components";
//ROUTER
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [searchQueue, setSearchQueue] = useState("");
  const [weatherDays, setWeatherDays] = useState({});

  //Handle Search Queue change
  const handleQueueChange = (e) => {
    setSearchQueue((prevQueue) => (prevQueue = e.target.value));
  };

  //Handle Entered Queue
  const enterKeyQueue = async (keyEvent) => {
    if (keyEvent.key === "Enter") {
      const nextDayData = await FetchNextDays(searchQueue);
      // console.log(nextDayData);

      setWeatherDays((prevDay) => (prevDay = nextDayData.map((days) => days)));
      setSearchQueue((prevQueue) => (prevQueue = ""));
    }
  };
  return (
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
  );
}

export default App;
