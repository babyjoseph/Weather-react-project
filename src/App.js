import React, { useState } from "react";
//STYLES
import { MainWrapper, LoadingContent } from "./styles";
import GlobalStyle from "./GlobalStyle";
//API
import { FetchNextDays } from "./api/GetWeather";
import { CurrentForecast, Forecast, SearchBar } from "./components";
//ROUTER
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [searchQueue, setSearchQueue] = useState("");
  const [weatherDays, setWeatherDays] = useState({});
  const [loading, setLoading] = useState(false);

  //Handle Search Queue change
  const handleQueueChange = (e) => {
    setSearchQueue((prevQueue) => (prevQueue = e.target.value));
  };

  //Handle Entered Queue
  const enterKeyQueue = async (keyEvent) => {
    if (keyEvent.key === "Enter") {
      const weatherData = await FetchNextDays(searchQueue);
      setLoading((prevData) => (prevData = true));
      // console.log(weatherData);
      if (weatherData === undefined) {
        alert("Unknown city");
        setLoading((prevData) => (prevData = false));
      } else {
        setWeatherDays(
          (prevDay) => (prevDay = weatherData.map((days) => days))
        );
        setLoading((prevData) => (prevData = false));
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
          {!loading ? (
            <CurrentForecast weather={weatherDays} />
          ) : (
            <LoadingContent> . . . </LoadingContent>
          )}
          <Forecast weather={weatherDays} />
        </MainWrapper>
      </Router>
    </>
  );
}

export default App;
