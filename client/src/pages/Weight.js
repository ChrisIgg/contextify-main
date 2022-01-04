import { React, useState } from "react";
import Output from "../components/Output/Output";
import {
  InputGroup,
  Dropdown,
  SplitButton,
  FormControl,
  Button,
} from "react-bootstrap";

import OutputDisplay from "../components/ImagesDisplay/ImagesDisplay";

const Weight = () => {
  const [weight, setWeight] = useState("lbs");
  const [output, setOutput] = useState("lbs");
  const [search, setSearch] = useState();
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

  function setPounds() {
    setOutput("lbs");
  }
  function setOunces() {
    setOutput("oz");
  }
  function setGrams() {
    setOutput("g");
  }
  function setApples() {
    setOutput("Apples");
  }
  function setKilograms() {
    setAnswer(null);
    setOutput("kg");
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
  function kilograms() {
    setWeight("kg");
  }
  function findWeight() {
    if (weight === output) {
      setAnswer(search);
      setOutputAnswer(output);
    }
    if (weight === "lbs" && output === "oz") {
      setAnswer(Number(search) * 16);
      setOutputAnswer(output);
    }
    if (weight === "lbs" && output === "kg") {
      setAnswer(Number(search) / 2.2);
      setOutputAnswer(output);
    }
    if (weight === "lbs" && output === "g") {
      setAnswer(Number(search) * 453.6);
      setOutputAnswer(output);
    }
    if (weight === "lbs" && output === "Apples") {
      let newWeight = Number(search) / 0.3;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (weight === "lbs" && output === "Water") {
      let newWeight = Number(search) / 0.00011;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (weight === "oz" && output === "lbs") {
      setAnswer(Number(search) / 16);
      setOutputAnswer(output);
    }
    if (weight === "oz" && output === "g") {
      setAnswer(Number(search) * 28.3);
      setOutputAnswer(output);
    }
    if (weight === "oz" && output === "Apples") {
      let newWeight = Number(search) / 5.1;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (weight === "oz" && output === "Water") {
      let newWeight = Number(search) / 0.0017;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (weight === "kg" && output === "lbs") {
      setAnswer(Number(search) * 2.2);
      setOutputAnswer(output);
    }
    if (weight === "kg" && output === "oz") {
      setAnswer(Number(search) * 35.3);
      setOutputAnswer(output);
    }
    if (weight === "kg" && output === "g") {
      setAnswer(Number(search) * 1000);
      setOutputAnswer(output);
    }
    if (weight === "kg" && output === "Apples") {
      let newWeight = Number(search) / 0.145;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (weight === "kg" && output === "Water") {
      let newWeight = Number(search) / 0.00005;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (weight === "g" && output === "lbs") {
      setAnswer(Number(search) / 454);
      setOutputAnswer(output);
    }
    if (weight === "g" && output === "kg") {
      setAnswer(Number(search) / 1000);
      setOutputAnswer(output);
    }
    if (weight === "g" && output === "oz") {
      setAnswer(Number(search) / 28.4);
      setOutputAnswer(output);
    }
    if (weight === "g" && output === "Apples") {
      let newWeight = Number(search) / 145;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
    }
    if (weight === "g" && output === "Water") {
      let newWeight = Number(search) / 0.05;
      setOutputAnswer(output);
      setAnswer(newWeight);
      setCalculatedWeight(newWeight);
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
            <Dropdown.Item onClick={kilograms}>kg</Dropdown.Item>
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
          <Dropdown.Item onClick={setKilograms}>kg</Dropdown.Item>
          <Dropdown.Item onClick={setOunces}>oz</Dropdown.Item>
          <Dropdown.Item onClick={setGrams}>g</Dropdown.Item>
          <Dropdown.Item onClick={setApples}>Apples</Dropdown.Item>
        </SplitButton>
        <Button onClick={findWeight}>Contextify</Button>
        <OutputDisplay weight={calculatedWeight} output={output} />
        <Output answer={answer} output={outputAnswer} />
      </>
    </main>
  );
};

export default Weight;
