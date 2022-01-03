import { React, useState } from "react";
import Output from "../components/Output/Output";
import {
  InputGroup,
  Dropdown,
  SplitButton,
  FormControl,
  Button,
} from "react-bootstrap";

const Weight = () => {
  const [weight, setWeight] = useState("lbs");
  const [output, setOutput] = useState("lbs");
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState(null);

  function displayAnswer() {
    setShow(true);
  }
  function Answer() {
    if (show === true) {
      return (
        <div>
          <h2>this is the output section</h2>
        </div>
      );
    }
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
  function setBanana() {
    setOutput("Bananas");
  }
  function setKilograms() {
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
      console.log(`same output`);
    }
    if (weight === "lbs" && output === "oz") {
      console.log(`lbs to oz`);
      let newWeight = Number(search) * 16;
      setAnswer(newWeight);
      console.log(newWeight);
    }
    if (weight === "lbs" && output === "kg") {
      console.log(`lbs to kg`);
      let newWeight = Number(search) / 2.205;
      setAnswer(newWeight);
      console.log(newWeight);
    }
    if (weight === "lbs" && output === "g") {
      console.log(`lbs to g`);
      let newWeight = Number(search) * 453.592;
      setAnswer(newWeight);
      console.log(newWeight);
    }
    if (weight === "lbs" && output === "Bananas") {
      console.log(`lbs to bananas`);
      let newWeight = Number(search);
    }
    if (weight === "oz" && output === "lbs") {
      console.log(`oz to lbs`);
      let newWeight = Number(search) / 16;
      setAnswer(newWeight);
      console.log(newWeight);
    }
    if (weight === "oz" && output === "g") {
      console.log(`oz to g`);
      let newWeight = Number(search) * 28.3495;
      setAnswer(newWeight);
      console.log(newWeight);
    }
    if (weight === "kg" && output === "lbs") {
      console.log(`kg to lbs`);
      let newWeight = Number(search) * 2.205;
      setAnswer(newWeight);
      console.log(newWeight);
    }
    if (weight === "kg" && output === "oz") {
      console.log(`kg to oz`);
      let newWeight = Number(search) * 35.274;
      setAnswer(newWeight);
      console.log(newWeight);
    }
    if (weight === "kg" && output === "g") {
      console.log(`kg to g`);
      let newWeight = Number(search) * 1000;
      setAnswer(newWeight);
      console.log(newWeight);
    }
    if (weight === "g" && output === "lbs") {
      let newWeight = Number(search) / 454;
      setAnswer(newWeight);
      console.log(newWeight);
    }
    if (weight === "g" && output === "kg") {
      let newWeight = Number(search) / 1000;
      setAnswer(newWeight);
      console.log(newWeight);
    }
    if (weight === "g" && output === "oz") {
      let newWeight = Number(search) / 28.35;
      setAnswer(newWeight);
      console.log(newWeight);
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
          <Dropdown.Item onClick={setBanana}>Bananas</Dropdown.Item>
        </SplitButton>
        <Button onClick={findWeight}>Contextify</Button>
        <Output answer={answer} output={output} />
      </>
    </main>
  );
};

export default Weight;
