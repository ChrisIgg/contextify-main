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

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const [inputType, setInputType] = useState("Lbs");

  function pounds() {
    setInputType("lbs");
  }
  function oz() {
    setInputType("oz");
  }
  function grams() {
    setInputType("g");
  }
  return (
    <main>
      <>
        <InputGroup className="mb-3">
          <FormControl
            type="number"
            aria-label="Text input with dropdown button"
          />
          <SplitButton
            variant="outline-secondary"
            title={inputType}
            id="segmented-button-dropdown-2"
            alignRight
          >
            <Dropdown.Item onClick={pounds}>lbs</Dropdown.Item>
            <Dropdown.Item onClick={oz}>oz</Dropdown.Item>
            <Dropdown.Item onClick={grams}>g</Dropdown.Item>
          </SplitButton>
          <Button variant="outline-info">Search</Button>{" "}
        </InputGroup>
      </>
    </main>
  );
};

export default Home;
