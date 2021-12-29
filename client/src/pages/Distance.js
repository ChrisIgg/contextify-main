import { React, useState } from "react";
import {
  InputGroup,
  Dropdown,
  SplitButton,
  FormControl,
  Button,
} from "react-bootstrap";
function Distance() {
  const [distance, setDistance] = useState("ft");
  const [search, setSearch] = useState();
  const [output, setOutput] = useState("ft");
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
    console.log(`finding distance...`);
    if (distance === "ft" && output === "in") {
      console.log(`ft to in`);
      let result = Number(search) * 12;
      console.log(result);
    }
    if (distance === "ft" && output === "mi") {
      console.log(`ft to mi`);
      let result = Number(search) / 5280;
      console.log(result);
    }
    if (distance === "ft" && output === "m") {
      console.log(`ft to m`);
      let result = Number(search) / 3.281;
      console.log(result);
    }
    if (distance === "ft" && output === "cm") {
      console.log(`ft to cm`);
      let result = Number(search) * 30.48;
      console.log(result);
    }
    if (distance === "mi" && output === "m") {
      console.log(`mi to m`);
      let result = Number(search) * 1609;
      console.log(result);
    }
    if (distance === "mi" && output === "ft") {
      console.log(`mi to ft`);
      let result = Number(search) * 5280;
      console.log(result);
    }
    if (distance === "mi" && output === "in") {
      console.log(`mi to in`);
      let result = Number(search) * 63360;
      console.log(result);
    }
    if (distance === "mi" && output === "cm") {
      console.log(`mi to cm`);
      let result = Number(search) * 160934;
      console.log(result);
    }
    if (distance === "m" && output === "mi") {
      console.log(`m to mi`);
      let result = Number(search) / 1609;
      console.log(result);
    }
    if (distance === "m" && output === "ft") {
      console.log(`m to mi`);
      let result = Number(search) * 3.281;
      console.log(result);
    }
    if (distance === "m" && output === "in") {
      console.log(`m to in`);
      let result = Number(search) * 39.37;
      console.log(result);
    }
    if (distance === "m" && output === "cm") {
      console.log(`m to cm`);
      let result = Number(search) * 100;
      console.log(result);
    }
    if (distance === "in" && output === "mi") {
      console.log(`in to mi`);
      let result = Number(search) / 63360;
      console.log(result);
    }
    if (distance === "in" && output === "m") {
      console.log(`in to m`);
      let result = Number(search) / 39.37;
      console.log(result);
    }
    if (distance === "in" && output === "ft") {
      console.log(`in to ft`);
      let result = Number(search) / 12;
      console.log(result);
    }
    if (distance === "in" && output === "cm") {
      console.log(`in to cm`);
      let result = Number(search) / 2.54;
      console.log(result);
    }
    if (distance === "cm" && output === "mi") {
      console.log(`cm to mi`);
      let result = Number(search) / 160934;
      console.log(result);
    }
    if (distance === "cm" && output === "m") {
      console.log(`cm to m`);
      let result = Number(search) / 100;
      console.log(result);
    }
    if (distance === "cm" && output === "ft") {
      console.log(`cm to ft`);
      let result = Number(search) / 30.48;
      console.log(result);
    }
    if (distance === "cm" && output === "in") {
      console.log(`cm to in`);
      let result = Number(search) / 2.54;
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
      </>
    </main>
  );
}

export default Distance;
