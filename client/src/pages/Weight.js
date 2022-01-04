import { React, useState } from "react";
import Output from "../components/Output/Output";
import {
  InputGroup,
  Dropdown,
  SplitButton,
  FormControl,
  Button,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import "../styles/Weight.css";
import "../styles/Buttons.css";

import ImageDisplay from "../components/ImagesDisplay/ImagesDisplay";
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
    if (weight === "oz" && output === "lbs") {
      setAnswer(Number(search) / 16);
      setOutputAnswer(output);
    }
    if (weight === "oz" && output === "g") {
      setAnswer(Number(search) * 28.3);
      setOutputAnswer(output);
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
    console.log(
      `userWeight: ${search} \n weightType: ${weight} \n outputType: ${output}`
    );
  }
  console.log(calculatedWeight, "before return");

  return (

    <main class="weight-body" style={styles.font}>

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

        <h2 style={styles.centerText} >Output weight in...</h2>
        <div class="contextify-section">
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
          <Link className="contex-btn" onClick={findWeight}>
            Contextify
          </Link>
        </div>

        <ImageDisplay weight={calculatedWeight} />
        <Output answer={answer} output={outputAnswer} />
      </>
    </main>
  );
};

export default Weight;
