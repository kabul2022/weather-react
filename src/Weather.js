import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handelResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}℃`
    );
  }

  let apiKey = "fed05438baea4bf5c4d86d8a94d310b9";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handelResponse);

  return <h2> Hello fromm Weather</h2>;
}
