import { React, useState } from "react";
import Output from "../components/Output/Output";

import {
  InputGroup,
  Dropdown,
  SplitButton,
  FormControl,
} from "react-bootstrap";
import "../styles/Time.css";
import "../styles/button.css";
import OutputDisplay from "../components/ImagesDisplay/TimeDisplay.js";

const styles = {
  font: {
    fontFamily: "Ubuntu, sans-serif",
  },
  // centerText is for 'output weight in...'
  // centerText: { fontFamily: "Ubuntu, sans-serif" },
  // centerText: { fontFamily: "Noto Sans JP, sans-serif" },
  // centerText: { fontFamily: "Roboto, sans-serif" },
  centerText: { fontFamily: "Source Sans Pro, sans-serif" },
};

const Time = () => {
  const [time, setTime] = useState("min");
  const [search, setSearch] = useState();
  const [output, setOutput] = useState("min");
  const [calculatedWeight, setCalculatedWeight] = useState(0.0);
  const [answer, setAnswer] = useState(null);
  const [outputAnswer, setOutputAnswer] = useState();
  const handleInputChange = (e) => setSearch(Number(e.target.value));
  if (calculatedWeight < 0.0) {
    setCalculatedWeight(0.0);
  }

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
  function setPopcorn() {
    setOutput("Popcorn");
  }
  function setBaths() {
    setOutput("Baths");
  }
  function setWorkday() {
    setOutput("Workday");
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
    if (time === "day" && output === "Day") {
      let newWeight = Number(search);
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (time === "day" && output === "Baths") {
      let newWeight = Number(search) * 48;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (time === "day" && output === "Popcorn") {
      let newWeight = Number(search) * 1440 * 3;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (time === "day" && output === "Workday") {
      let newWeight = Number(search) * 8;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
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
    if (time === "hour" && output === "Baths") {
      let newWeight = Number(search) * 2;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (time === "hour" && output === "Popcorn") {
      let newWeight = Number(search) * 60 * 3;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (time === "hour" && output === "Workday") {
      let newWeight = (Number(search) / 24) * 8;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
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
    if (time === "min" && output === "Baths") {
      let newWeight = Number(search) / 30;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (time === "min" && output === "Popcorn") {
      let newWeight = Number(search) / 3;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (time === "min" && output === "Workday") {
      let newWeight = Number(search) / (60 * 8);
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
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
    <main className="time-body" style={styles.font}>
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

        <h2 style={styles.centerText}>Output time in...</h2>
        <div className="contextify-section">
          <SplitButton
            variant="outline-secondary"
            title={output}
            id="segmented-button-dropdown-2"
          >
            <Dropdown.Item onClick={setDay}>day</Dropdown.Item>
            <Dropdown.Item onClick={setHour}>hour</Dropdown.Item>
            <Dropdown.Item onClick={setMinutes}>min</Dropdown.Item>
            <Dropdown.Item onClick={setSeconds}>sec</Dropdown.Item>
            <Dropdown.Item onClick={setPopcorn}>Popcorn</Dropdown.Item>
            <Dropdown.Item onClick={setBaths}>Baths</Dropdown.Item>
            <Dropdown.Item onClick={setWorkday}>Workday</Dropdown.Item>
          </SplitButton>
          <button className="contex-btn" onClick={findTime}>
            Contextify
          </button>
        </div>
        <OutputDisplay weight={calculatedWeight} output={output} />
        <Output answer={answer} output={outputAnswer} />
      </>
    </main>
  );
};

export default Time;
