import { React, useState } from "react";

import {
  InputGroup,
  Dropdown,
  SplitButton,
  FormControl,
  Button,
} from "react-bootstrap";

const Time = () => {
  const [time, setTime] = useState("min");
  const [search, setSearch] = useState();
  const [output, setOutput] = useState("min");

  const handleInputChange = (e) => setSearch(Number(e.target.value));
  if (search < 0) {
    setSearch(0);
  }
  function setDay() {
    setOutput("day");
  }
  function setHour() {
    setOutput("hour");
  }
  function setMinutes() {
    setOutput("min");
  }
  function setSeconds() {
    setOutput("sec");
  }
  function hour() {
    setTime("hour");
  }
  function minutes() {
    setTime("min");
  }
  function seconds() {
    setTime("sec");
  }
  function day() {
    setTime("day");
  }
  function findTime() {
    console.log(`finding time`);
    if (time === "day" && output === "hour") {
      console.log(`day to hour`);
      let result = search * 24;
      console.log(result);
    }
    if (time === "day" && output === "hour") {
      console.log(`day to hour`);
      let result = search * 24;
      console.log(result);
    }
    if (time === "day" && output === "min") {
      console.log(`day to min`);
      let result = search * 1440;
      console.log(result);
    }
    if (time === "day" && output === "sec") {
      console.log(`day to sec`);
      let result = search * 86400;
      console.log(result);
    }
    if (time === "hour" && output === "day") {
      console.log(`hour to day`);
      let result = search / 24;
      console.log(result);
    }
    if (time === "hour" && output === "min") {
      console.log(`hour to min`);
      let result = search * 60;
      console.log(result);
    }
    if (time === "hour" && output === "sec") {
      console.log(`hour to sec`);
      let result = search * 3600;
      console.log(result);
    }
    if (time === "min" && output === "day") {
      console.log(`min to day`);
      let result = search / 1440;
      console.log(result);
    }
    if (time === "min" && output === "hour") {
      console.log(`min to hour`);
      let result = search / 60;
      console.log(result);
    }
    if (time === "min" && output === "sec") {
      console.log(`min to sec`);
      let result = search * 60;
      console.log(result);
    }
    if (time === "sec" && output === "day") {
      console.log(`sec to day`);
      let result = search / 86400;
      console.log(result);
    }
    if (time === "sec" && output === "hour") {
      console.log(`sec to hour`);
      let result = search / 86400;
      console.log(result);
    }
    if (time === "sec" && output === "min") {
      console.log(`sec to min`);
      let result = search / 60;
      console.log(result);
    }
  }
  return (
    <main>
      <>
        <InputGroup className="mb-3">
          <FormControl
            type="number"
            aria-label="Text input with dropdown button"
            value={search}
            onChange={handleInputChange}
          />
          <SplitButton
            variant="outline-secondary"
            title={time}
            id="segmented-button-dropdown-2"
            alignRight
          >
            <Dropdown.Item onClick={day}>day</Dropdown.Item>
            <Dropdown.Item onClick={hour}>hour</Dropdown.Item>
            <Dropdown.Item onClick={minutes}>min</Dropdown.Item>
            <Dropdown.Item onClick={seconds}>sec</Dropdown.Item>
          </SplitButton>
        </InputGroup>
        <h2>Output time in...</h2>
        <SplitButton
          variant="outline-secondary"
          title={output}
          id="segmented-button-dropdown-2"
        >
          <Dropdown.Item onClick={setDay}>day</Dropdown.Item>
          <Dropdown.Item onClick={setHour}>hour</Dropdown.Item>
          <Dropdown.Item onClick={setMinutes}>min</Dropdown.Item>
          <Dropdown.Item onClick={setSeconds}>sec</Dropdown.Item>
        </SplitButton>
        <Button onClick={findTime}>Contextify</Button>
      </>
    </main>
  );
};

export default Time;
