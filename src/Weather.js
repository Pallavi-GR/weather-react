import React from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The tempertaure in ${props.city} is ${response.data.main.temp} C `);
  }

  let apiKey = "cf3e506438214bee7911d63659fba7fa";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
  return <Circles color="#00BFFF" height={80} width={80} />;
}
