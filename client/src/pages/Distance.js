import { React, useState } from "react";
import Output from "../components/Output/Output";
import {
  InputGroup,
  Dropdown,
  SplitButton,
  FormControl,
  Button,
} from "react-bootstrap";

import OutputDisplay from "../components/ImagesDisplay/DistanceDisplay.js";

function Distance() {
  const [distance, setDistance] = useState("ft");
  const [search, setSearch] = useState();
  const [output, setOutput] = useState("ft");
  const [calculatedWeight, setCalculatedWeight] = useState(0.0);
  const [answer, setAnswer] = useState(null);
  const [outputAnswer, setOutputAnswer] = useState();
  if (calculatedWeight < 0.0) {
    setCalculatedWeight(0.0);
  }

  if (search < 0) {
    setSearch(0);
  }
  const handleInputChange = (e) => setSearch(e.target.value);
  function feet() {
    setDistance("ft");
  }
  function inches() {
    setDistance("in");
  }
  function miles() {
    setDistance("mi");
  }
  function meters() {
    setDistance("m");
  }
  function centimeters() {
    setDistance("cm");
  }
  function setFeet() {
    setOutput("ft");
  }
  function setInches() {
    setOutput("in");
  }
  function setMeters() {
    setOutput("m");
    setOutputAnswer(output);
  }
  function setMiles() {
    setOutput("mi");
  }
  function setCentimeters() {
    setOutput("cm");
  }
  function setBananas() {
    setOutput("banana");
  }
  function findDistance() {
    if (distance === output) {
      setAnswer(search);
    }
    if (distance === "ft" && output === "in") {
      setAnswer(Number(search) * 12);
      setOutputAnswer(output);
    }
    if (distance === "ft" && output === "mi") {
      setAnswer(Number(search) / 5280);
      setOutputAnswer(output);
    }
    if (distance === "ft" && output === "m") {
      setAnswer(Number(search) / 3.281);
      setOutputAnswer(output);
    }
    if (distance === "ft" && output === "cm") {
      setAnswer(Number(search) * 30.48);
      setOutputAnswer(output);
    }
    if (distance === "mi" && output === "m") {
      setAnswer(Number(search) * 1609);
      setOutputAnswer(output);
    }
    if (distance === "mi" && output === "ft") {
      setAnswer(Number(search) * 5280);
      setOutputAnswer(output);
    }
    if (distance === "mi" && output === "in") {
      setAnswer(Number(search) * 63360);
      setOutputAnswer(output);
    }
    if (distance === "mi" && output === "cm") {
      setAnswer(Number(search) * 160934);
      setOutputAnswer(output);
    }
    if (distance === "m" && output === "mi") {
      setAnswer(Number(search) / 1609);
      setOutputAnswer(output);
    }
    if (distance === "m" && output === "ft") {
      setAnswer(Number(search) * 3.281);
      setOutputAnswer(output);
    }
    if (distance === "m" && output === "in") {
      setAnswer(Number(search) * 39.37);
      setOutputAnswer(output);
    }
    if (distance === "m" && output === "cm") {
      setAnswer(Number(search) * 100);
      setOutputAnswer(output);
    }
    if (distance === "in" && output === "mi") {
      setAnswer(Number(search) / 63360);
      setOutputAnswer(output);
    }
    if (distance === "in" && output === "m") {
      setAnswer(Number(search) / 39.37);
      setOutputAnswer(output);
    }
    if (distance === "in" && output === "ft") {
      setAnswer(Number(search) / 12);
      setOutputAnswer(output);
    }
    if (distance === "in" && output === "cm") {
      setAnswer(Number(search) / 2.54);
      setOutputAnswer(output);
    }
    if (distance === "cm" && output === "mi") {
      setAnswer(Number(search) / 160934);
      setOutputAnswer(output);
    }
    if (distance === "cm" && output === "m") {
      setAnswer(Number(search) / 100);
      setOutputAnswer(output);
    }
    if (distance === "cm" && output === "ft") {
      setAnswer(Number(search) / 30.48);
      setOutputAnswer(output);
    }
    if (distance === "cm" && output === "in") {
      setAnswer(Number(search) / 2.54);
      setOutputAnswer(output);
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
            title={distance}
            id="segmented-button-dropdown-2"
            alignRight
          >
            <Dropdown.Item onClick={miles}>mi</Dropdown.Item>
            <Dropdown.Item onClick={meters}>m</Dropdown.Item>
            <Dropdown.Item onClick={feet}>ft</Dropdown.Item>
            <Dropdown.Item onClick={inches}>in</Dropdown.Item>
            <Dropdown.Item onClick={centimeters}>cm</Dropdown.Item>
          </SplitButton>
        </InputGroup>
        <h2>Output distance in...</h2>
        <SplitButton
          variant="outline-secondary"
          title={output}
          id="segmented-button-dropdown-2"
        >
          <Dropdown.Item onClick={setMiles}>mi</Dropdown.Item>
          <Dropdown.Item onClick={setMeters}>m</Dropdown.Item>
          <Dropdown.Item onClick={setFeet}>ft</Dropdown.Item>
          <Dropdown.Item onClick={setInches}>in</Dropdown.Item>
          <Dropdown.Item onClick={setCentimeters}>cm</Dropdown.Item>
          <Dropdown.Item onClick={setBananas}>Bananas</Dropdown.Item>
        </SplitButton>
        <Button onClick={findDistance}>Contextify</Button>
        <Output answer={answer} output={outputAnswer} />
      </>
    </main>
  );
}

export default Distance;
