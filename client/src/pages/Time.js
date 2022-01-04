import { React, useState } from "react";
import Output from "../components/Output/Output";

import {
  InputGroup,
  Dropdown,
  SplitButton,
  FormControl,
  Button,
} from "react-bootstrap";

import "../styles/Time.css";

const Time = () => {
  const [time, setTime] = useState("min");
  const [search, setSearch] = useState();
  const [output, setOutput] = useState("min");
  const [answer, setAnswer] = useState(null);
  const [outputAnswer, setOutputAnswer] = useState();
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
    if (time === output) {
      setAnswer(search);
    }
    if (time === "day" && output === "hour") {
      setAnswer(search * 24);
      setOutputAnswer(output);
    }
    if (time === "day" && output === "hour") {
      setAnswer(search * 24);
      setOutputAnswer(output);
    }
    if (time === "day" && output === "min") {
      setAnswer(search * 1440);
      setOutputAnswer(output);
    }
    if (time === "day" && output === "sec") {
      setAnswer(search * 86400);
      setOutputAnswer(output);
    }
    if (time === "hour" && output === "day") {
      setAnswer(search / 24);
      setOutputAnswer(output);
    }
    if (time === "hour" && output === "min") {
      setAnswer(search * 60);
      setOutputAnswer(output);
    }
    if (time === "hour" && output === "sec") {
      setAnswer(search * 3600);
      setOutputAnswer(output);
    }
    if (time === "min" && output === "day") {
      setAnswer(search / 1440);
      setOutputAnswer(output);
    }
    if (time === "min" && output === "hour") {
      setAnswer(search / 60);
      setOutputAnswer(output);
    }
    if (time === "min" && output === "sec") {
      setAnswer(search * 60);
      setOutputAnswer(output);
    }
    if (time === "sec" && output === "day") {
      setAnswer(search / 86400);
      setOutputAnswer(output);
    }
    if (time === "sec" && output === "hour") {
      setAnswer(search / 86400);
      setOutputAnswer(output);
    }
    if (time === "sec" && output === "min") {
      setAnswer(search / 60);
      setOutputAnswer(output);
    }
  }
  return (
    <main class="time-body">
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
        <Output answer={answer} output={outputAnswer} />
      </>
    </main>
  );
};

export default Time;
