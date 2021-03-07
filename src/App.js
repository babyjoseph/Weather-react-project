import React, { useState } from "react";
import { MainWrapper } from "./styles";

import { FetchNextDays, FetchToday } from "./api/GetWeather";
import { CurrentForecast, Forecast, SearchBar } from "./components";

function App() {
  const [searchQueue, setSearchQueue] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [weatherDays, setWeatherDays] = useState({});

  //Handle Search Queue change
  const handleQueueChange = (e) => {
    setSearchQueue((prevQueue) => (prevQueue = e.target.value));
  };

  //Handle Entered Queue
  const enterKeyQueue = async (keyEvent) => {
    if (keyEvent.key === "Enter") {
      const todayData = await FetchToday(searchQueue);
      const nextDayData = await FetchNextDays(searchQueue);
      // console.log(todayData);

      setWeatherData((prevData) => (prevData = todayData));
      setWeatherDays((prevDay) => (prevDay = nextDayData.map((days) => days)));
      setSearchQueue((prevQueue) => (prevQueue = ""));
    }
  };
  // useEffect(() => {
  //   console.log(weatherDays);
  // }, [weatherDays]);
  return (
    <MainWrapper>
      <SearchBar
        searchQueue={searchQueue}
        handleChange={handleQueueChange}
        keyPressed={enterKeyQueue}
      />
      <CurrentForecast weather={weatherData} />
      <Forecast weather={weatherDays} />
    </MainWrapper>
  );
}

export default App;
