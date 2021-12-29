import { React, useState } from "react";
import { useQuery } from "@apollo/client";

import {
  InputGroup,
  Dropdown,
  SplitButton,
  FormControl,
  Button,
} from "react-bootstrap";
import ProfileList from "../components/ProfileList";

import { QUERY_PROFILES } from "../utils/queries";

const Weight = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const [weight, setWeight] = useState("lbs");
  const [output, setOutput] = useState("lbs");
  const [search, setSearch] = useState(0);

  const handleInputChange = (e) => setSearch(e.target.value);

  function setPounds() {
    setOutput("lbs");
  }
  function setOunces() {
    setOutput("oz");
  }
  function setGrams() {
    setOutput("g");
  }
  function pounds() {
    setWeight("lbs");
  }
  function oz() {
    setWeight("oz");
  }
  function grams() {
    setWeight("g");
  }
  function findWeight() {
    // get weight from input
    let userWeight = search;
    // get weight type from input
    let weightType = weight;
    // get output type from search field
    let outputType = output;
    console.log(
      `userWeight: ${userWeight} \n weightType: ${weightType} \n outputType: ${outputType}`
    );
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
            title={weight}
            id="segmented-button-dropdown-2"
            alignRight
          >
            <Dropdown.Item onClick={pounds}>lbs</Dropdown.Item>
            <Dropdown.Item onClick={oz}>oz</Dropdown.Item>
            <Dropdown.Item onClick={grams}>g</Dropdown.Item>
          </SplitButton>
        </InputGroup>
        <h2>Output weight in...</h2>
        <SplitButton
          variant="outline-secondary"
          title={output}
          id="segmented-button-dropdown-2"
        >
          <Dropdown.Item onClick={setPounds}>lbs</Dropdown.Item>
          <Dropdown.Item onClick={setOunces}>oz</Dropdown.Item>
          <Dropdown.Item onClick={setGrams}>g</Dropdown.Item>
          <Dropdown.Item>Bananas</Dropdown.Item>
        </SplitButton>
        <Button onClick={findWeight}>Contextify</Button>
      </>
    </main>
  );
};

export default Weight;
