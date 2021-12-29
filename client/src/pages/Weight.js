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
  const [search, setSearch] = useState();
  if (search < 0) {
    setSearch(0);
  }
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
  function setBanana() {
    setOutput("Bananas");
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
    if (weight === "lbs" && output === "oz") {
      console.log(`lbs to oz`);
      let newWeight = Number(search) * 16;
      console.log(newWeight);
    }
    if (weight === "lbs" && output === "g") {
      console.log(`lbs to g`);
      let newWeight = Number(search) * 453.592;
      console.log(newWeight);
    }
    if (weight === "lbs" && output === "lbs") {
      console.log(`lbs to lbs`);
      let newWeight = Number(search);
      console.log(newWeight);
    }
    if (weight === "lbs" && output === "Bananas") {
      console.log(`lbs to bananas`);
    }
    console.log(
      `userWeight: ${search} \n weightType: ${weight} \n outputType: ${output}`
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
          <Dropdown.Item onClick={setBanana}>Bananas</Dropdown.Item>
        </SplitButton>
        <Button onClick={findWeight}>Contextify</Button>
      </>
    </main>
  );
};

export default Weight;
